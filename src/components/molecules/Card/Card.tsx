import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../../utils";

const cardStyles = cva('w-full rounded-lg shadow-lg bg-white p-5 flex flex-col justify-evenly');

type CardProps = ComponentProps<'div'> & VariantProps<typeof cardStyles> & {
    width?: number | string;
    height?: number | string ;
};

const Card = forwardRef<HTMLDivElement, CardProps>(({
    className,
    children,
    width,
    height,
    ...props
}, ref) => {
    const inlineStyles = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
    };

    return (
        <div
            ref={ref}
            style={inlineStyles}
            className={cn(cardStyles(), className)}
            {...props}
        >
            {children}
        </div>
    );
});

export default Card;
