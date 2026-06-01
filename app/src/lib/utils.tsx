import { clsx, type ClassValue } from "clsx";
import { useCallback, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useHover() {
  const [hovering, setHovering] = useState(false);
  const previousNode = useRef<HTMLElement | null>(null);

  const handleMouseEnter = useCallback(() => {
    setHovering(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setHovering(false);
  }, []);

  

  const customRef = useCallback(
    (node: HTMLElement|null) => {
      if (previousNode.current) {
        previousNode.current.removeEventListener(
          "mouseenter",
          handleMouseEnter,
        );
        previousNode.current.removeEventListener(
          "mouseleave",
          handleMouseLeave,
        );
      }
      if (node) {
        node.addEventListener("mouseenter", handleMouseEnter);
        node.addEventListener("mouseleave", handleMouseLeave);
      }

      previousNode.current = node;
    },
    [handleMouseEnter, handleMouseLeave],
  );

  return { customRef, hovering}
}
