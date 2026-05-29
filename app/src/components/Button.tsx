import type { ReactNode } from "react";

interface buttonProps {
  children: ReactNode;
}

export function HeaderButton({ children }: buttonProps) {
  return (
    <button className="hover:bg-gray-200 h-10 px-3 rounded items-center flex-inline">{children}</button>
  );
}

export function CTAButton({ children }: buttonProps) {
  return (
    <button className="hover:bg-blue-200 bg-leaf h-10 flex-inline items-center px-3 rounded text-white">{children}</button>
  );
}
