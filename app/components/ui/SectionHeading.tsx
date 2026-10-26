type Tone = "light" | "dark";

export function Eyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <p
      className={`inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.18em] uppercase ${
        tone === "dark" ? "text-orange-400" : "text-orange-700"
      }`}
    >
      <span aria-hidden className="h-px w-6 bg-current" />
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: Tone;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`} data-reveal>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={`mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl ${
          tone === "dark" ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${
            tone === "dark" ? "text-navy-200" : "text-steel-500"
          } ${centered ? "mx-auto" : ""} max-w-2xl`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
