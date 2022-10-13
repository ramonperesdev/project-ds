import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: IButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "text-black font-semibold bg-cyan-500 rounded py-4 px-3 text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
      )}
    >
      {children}
    </Comp>
  );
}
