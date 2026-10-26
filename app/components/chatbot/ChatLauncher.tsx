"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { Bot, X } from "lucide-react";
import { chatbot } from "@/app/content/chatbot";

// The panel only loads once the visitor shows intent, keeping the initial bundle small.
const loadPanel = () => import("./ChatPanel").then((m) => m.ChatPanel);
const ChatPanel = dynamic(loadPanel, { ssr: false });

const TEASER_DELAY = 10_000;
const TEASER_KEY = "acs-chat-teaser-seen";

function teaserSeen() {
  try {
    return sessionStorage.getItem(TEASER_KEY) === "1";
  } catch {
    return true;
  }
}

function markTeaserSeen() {
  try {
    sessionStorage.setItem(TEASER_KEY, "1");
  } catch {
    // Storage blocked (private mode); the teaser just may show again.
  }
}

export function ChatLauncher() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);

  // A single, dismissible nudge per session; the panel never opens on its own.
  useEffect(() => {
    if (teaserSeen()) return;
    const id = window.setTimeout(() => setTeaser(true), TEASER_DELAY);
    return () => window.clearTimeout(id);
  }, []);

  function dismissTeaser() {
    setTeaser(false);
    markTeaserSeen();
  }

  function toggle() {
    dismissTeaser();
    setLoaded(true);
    setOpen((v) => !v);
  }

  function close() {
    setOpen(false);
    launcherRef.current?.focus();
  }

  return (
    <>
      {loaded && <ChatPanel open={open} onClose={close} />}

      <div
        className={`fixed right-4 bottom-4 z-[60] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6 ${
          open ? "max-sm:hidden" : ""
        }`}
      >
        {teaser && !open && (
          <div className="relative max-w-60 rounded-2xl rounded-br-md bg-white py-3 pr-10 pl-4 text-[13px] leading-snug font-medium text-ink shadow-xl shadow-navy-950/15 ring-1 ring-mist-200">
            {chatbot.teaser}
            <button
              type="button"
              onClick={dismissTeaser}
              aria-label="Tutup sapaan"
              className="absolute top-0.5 right-0.5 inline-flex size-11 items-center justify-center rounded-full text-steel-500 hover:text-navy-900"
            >
              <X aria-hidden className="size-4" />
            </button>
          </div>
        )}

        <button
          ref={launcherRef}
          type="button"
          onClick={toggle}
          onPointerEnter={() => void loadPanel()}
          onFocus={() => void loadPanel()}
          aria-expanded={open}
          aria-controls={loaded ? "chatbot-panel" : undefined}
          aria-label={open ? "Tutup asisten" : chatbot.launcherLabel}
          className="group relative inline-flex size-16 items-center justify-center rounded-full bg-navy-900 text-orange-400 shadow-xl shadow-navy-950/40 ring-[3px] ring-orange-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-800 active:scale-95"
        >
          {!loaded && (
            // A few pulses to get noticed, then it stays still.
            <span
              aria-hidden
              style={{ animationIterationCount: 4 }}
              className="absolute inset-0 animate-ping-slow rounded-full ring-2 ring-orange-500/60"
            />
          )}
          {open ? <X aria-hidden className="size-7 text-white" /> : <Bot aria-hidden className="size-8" />}
        </button>
      </div>
    </>
  );
}
