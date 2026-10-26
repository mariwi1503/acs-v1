type Variant = "primary" | "light" | "ghost-dark" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange-500 text-navy-950 shadow-lg shadow-orange-500/25 hover:bg-orange-400 hover:shadow-orange-500/40",
  light: "bg-white text-navy-900 shadow-lg shadow-black/20 hover:bg-mist-100",
  "ghost-dark": "text-white ring-1 ring-white/25 ring-inset hover:bg-white/10 hover:ring-white/50",
  outline: "text-navy-900 ring-1 ring-navy-900/20 ring-inset hover:bg-navy-900 hover:text-white",
};

export function ButtonLink({
  href,
  variant = "primary",
  external = false,
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      data-magnetic={variant === "primary" ? "" : undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-200 active:scale-[0.98] sm:text-base ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
