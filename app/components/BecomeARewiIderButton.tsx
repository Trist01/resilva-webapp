"use client";

import { Button } from "./Button";
import { useRewiIderModal } from "./RewiIderModal";

type Variant = "primary" | "secondary";

export function BecomeARewiIderButton({
  variant = "primary",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const { open } = useRewiIderModal();
  return (
    <Button onClick={open} variant={variant} className={className}>
      Become a rewilder
    </Button>
  );
}
