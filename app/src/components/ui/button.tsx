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
    <button className={cn("bg-leaf hover:opacity-75 h-10 px-3 rounded-3xl text-white", className)} {...props}>
      {children}
    </button>
  );
}

export function FeatureButton ({children,className, ...props}:ButtonProps){
  return (
    <button className={cn(" hover:bg-leaf hover:text-white border-2 border-leaf font-semibold text-leaf h-10 px-3 rounded-3xl", className)} {...props}>
      {children}
    </button>
  )
}