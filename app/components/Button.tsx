import Link from "next/link";

type Variant = "primary" | "secondary";

const styles = (variant: Variant) =>
  [
    "inline-flex items-center justify-center",
    "px-8 py-4 font-extrabold text-lg md:text-xl tracking-[0.25em] uppercase",
    "transition-colors duration-200",
    variant === "primary"
      ? "bg-sage text-mist hover:bg-forest"
      : "bg-forest text-mist hover:bg-sage",
  ].join(" ");

// — For navigation (renders an <a> via Next.js Link)
interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={[styles(variant), className].filter(Boolean).join(" ")}
    >
      {children}
    </Link>
  );
}

// — For actions (renders a <button>)
interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function Button({
  onClick,
  type = "button",
  variant = "primary",
  children,
  className,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        styles(variant),
        disabled && "opacity-50 cursor-not-allowed",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}
