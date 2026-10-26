"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { ArrowDown, Bot, ExternalLink, Mail, RotateCcw, X } from "lucide-react";
import { chatbot, chatNodes, type ChatOption } from "@/app/content/chatbot";
import { whatsappUrl } from "@/app/lib/whatsapp";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";

type Entry = { id: number; from: "bot" | "user"; text: string };

const TYPING_DELAY = 600;

const chipBase =
  "inline-flex min-h-11 items-center gap-1.5 rounded-full px-3.5 py-2 text-left text-[13px] leading-snug font-semibold transition-all duration-200 active:scale-[0.98]";
const chipDefault = `${chipBase} bg-white text-navy-900 ring-1 ring-navy-900/20 ring-inset hover:bg-navy-900 hover:text-white`;
const chipWhatsapp = `${chipBase} bg-orange-500 text-navy-950 shadow-md shadow-orange-500/25 hover:bg-orange-400`;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function nodeEntries(nodeId: string, startId: number): Entry[] {
  return chatNodes[nodeId].messages.map((text, i) => ({ id: startId + i, from: "bot", text }));
}

export function ChatPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [entries, setEntries] = useState<Entry[]>(() => nodeEntries(chatbot.startNode, 0));
  const [nodeId, setNodeId] = useState<string>(chatbot.startNode);
  const [typing, setTyping] = useState(false);

  const nextId = useRef(entries.length);
  const timer = useRef<number | undefined>(undefined);
  const scrollRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const options = typing ? [] : (chatNodes[nodeId]?.options ?? []);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  // Keep the newest message and its options in view.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }, [entries, typing]);

  // Options are replaced after every answer, so move focus to the new set
  // instead of letting it fall back to <body>.
  useEffect(() => {
    if (!open || typing) return;
    optionsRef.current?.querySelector<HTMLElement>("a, button")?.focus({ preventScroll: true });
  }, [open, typing, nodeId]);

  function go(target: string, userLabel: string) {
    const destination = chatNodes[target] ? target : chatbot.startNode;
    setEntries((prev) => [...prev, { id: nextId.current++, from: "user", text: userLabel }]);
    setTyping(true);

    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(
      () => {
        const replies = nodeEntries(destination, nextId.current);
        nextId.current += replies.length;
        setEntries((prev) => [...prev, ...replies]);
        setNodeId(destination);
        setTyping(false);
      },
      prefersReducedMotion() ? 0 : TYPING_DELAY,
    );
  }

  function renderOption(option: ChatOption) {
    if ("next" in option) {
      return (
        <button type="button" onClick={() => go(option.next, option.label)} className={chipDefault}>
          {option.label}
        </button>
      );
    }

    if ("whatsapp" in option) {
      return (
        <a href={whatsappUrl(option.whatsapp)} target="_blank" rel="noopener noreferrer" className={chipWhatsapp}>
          <WhatsAppIcon className="size-4 shrink-0" />
          {option.label}
        </a>
      );
    }

    const isAnchor = option.href.startsWith("#");
    const Icon = isAnchor ? ArrowDown : option.href.startsWith("mailto:") ? Mail : ExternalLink;
    return (
      <a
        href={option.href}
        // Anchor links scroll the page; close the panel so the section is visible on mobile.
        onClick={isAnchor ? onClose : undefined}
        {...(option.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={chipDefault}
      >
        <Icon aria-hidden className="size-4 shrink-0" />
        {option.label}
      </a>
    );
  }

  return (
    <div
      id="chatbot-panel"
      role="dialog"
      aria-labelledby="chatbot-title"
      hidden={!open}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      className="fixed inset-0 z-[60] flex flex-col bg-mist-50 sm:inset-auto sm:right-6 sm:bottom-28 sm:h-[min(34rem,calc(100dvh-9rem))] sm:w-[22rem] sm:overflow-hidden sm:rounded-2xl sm:shadow-2xl sm:shadow-navy-950/30 sm:ring-1 sm:ring-navy-900/10"
    >
      <div className="flex items-center gap-3 bg-navy-950 px-4 py-3 text-white">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy-800 ring-2 ring-orange-500">
          <Bot aria-hidden className="size-[18px] text-orange-400" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 id="chatbot-title" className="text-sm font-bold">
            {chatbot.name}
          </h2>
          <p className="text-[11px] text-navy-200">{chatbot.status}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup asisten"
          className="inline-flex size-11 items-center justify-center rounded-full transition-colors hover:bg-white/10"
        >
          <X aria-hidden className="size-5" />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain px-4 py-5">
        <div role="log" aria-label="Percakapan" className="flex flex-col gap-2">
          {entries.map((entry) => (
            <p
              key={entry.id}
              className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-[13px] leading-relaxed whitespace-pre-line ${
                entry.from === "bot"
                  ? "self-start rounded-tl-md bg-white text-ink shadow-sm ring-1 ring-mist-200"
                  : "self-end rounded-tr-md bg-navy-900 text-white"
              }`}
            >
              {entry.from === "user" && <span className="sr-only">Anda: </span>}
              {entry.text}
            </p>
          ))}
          {typing && (
            <p className="flex gap-1 self-start rounded-2xl rounded-tl-md bg-white px-3.5 py-3 shadow-sm ring-1 ring-mist-200">
              <span className="sr-only">{chatbot.name} sedang mengetik</span>
              {[0, 150, 300].map((delay) => (
                <span
                  key={delay}
                  aria-hidden
                  style={{ animationDelay: `${delay}ms` }}
                  className="size-1.5 animate-bounce rounded-full bg-steel-500"
                />
              ))}
            </p>
          )}
        </div>

        {options.length > 0 && (
          <div ref={optionsRef} role="group" aria-label="Pilihan pertanyaan" className="mt-3 flex flex-wrap gap-2">
            {options.map((option) => (
              <Fragment key={option.label}>{renderOption(option)}</Fragment>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-mist-200 bg-white px-2 pb-[env(safe-area-inset-bottom)]">
        <button
          type="button"
          onClick={() => go(chatbot.startNode, chatbot.restartLabel)}
          disabled={typing || nodeId === chatbot.startNode}
          className="inline-flex min-h-12 items-center gap-2 rounded-full px-3 text-[13px] font-semibold text-navy-900 transition-colors hover:bg-mist-100 disabled:cursor-not-allowed disabled:text-steel-500 disabled:hover:bg-transparent"
        >
          <RotateCcw aria-hidden className="size-4" />
          {chatbot.restartLabel}
        </button>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-2 rounded-full px-3 text-[13px] font-bold text-orange-700 transition-colors hover:bg-orange-50"
        >
          <WhatsAppIcon className="size-4" />
          {chatbot.humanLabel}
        </a>
      </div>
    </div>
  );
}
