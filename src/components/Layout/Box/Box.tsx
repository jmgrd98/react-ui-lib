import { ComponentPropsWithRef, forwardRef } from "react";
import { cn } from "../../../utils";

export type BoxProps = ComponentPropsWithRef<'div'>; 

export const Box =forwardRef<HTMLDivElement, BoxProps>(({
    className,
    ...props
}, ref) => {
    return <div ref={ref} className={cn(className)} {...props} />
});