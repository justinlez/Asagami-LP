import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
interface FeaturesCardProps extends React.HTMLAttributes<HTMLDivElement> {}

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
    <button className={cn(" hover:bg-leaf hover:text-white border-2 drop-shadow-lg border-leaf font-semibold text-leaf h-10 px-[5%] rounded-3xl h-12   ", className)} {...props}>
      {children}
    </button>
  )
}

export function FeaturesCard({className, children, ...props}:ButtonProps){
    return (
        <button className={cn("flex text-start rounded-xl drop-shadow-lg w-5/6 p-[3%] bg-white ",className)} {...props}>
            {children}
        </button>
    )
}

export function LeafCircle ({children,className, ...props}:FeaturesCardProps){
  return (
    <div className={cn("bg-leaf text-white rounded-full h-fit w-fit px-3 py-1", className)} {...props}>
      {children}
    </div>
  )
}
