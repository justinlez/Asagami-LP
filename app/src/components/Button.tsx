import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function HeaderButton({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cn("hover:bg-gray-200 h-10 px-3 rounded", className)} {...props}>
      {children}
    </button>
  );
}

export function CTAButton({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cn("bg-leaf hover:bg-blue-200 h-10 px-3 rounded-3xl text-white", className)} {...props}>
      {children}
    </button>
  );
}