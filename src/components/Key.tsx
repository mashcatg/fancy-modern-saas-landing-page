import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export default function Key (props: HTMLAttributes<HTMLDivElement>){
    const { className, children, ...rest } = props;
    return (
        <div className={twMerge("size-14 bg-meutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral font-medium", className)} {...rest}>
            {children}
        </div>
    )
}