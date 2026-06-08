import { cn } from "@/lib/utils";

interface FeaturesCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function FeaturesCard({className, children, ...props}:FeaturesCardProps){
    return (
        <div className={cn(className, "flex  rounded-xl drop-shadow-lg w-5/6 p-[3%] bg-white ")} {...props}>
            {children}
        </div>
    )
}