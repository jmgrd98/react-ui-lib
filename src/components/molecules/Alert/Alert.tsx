import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../../utils";
import Card from "../Card/Card";

const cardStyles = cva('w-full rounded-lg shadow-lg bg-white p-5 flex flex-col justify-evenly');

type AlertProps = ComponentProps<'div'> & VariantProps<typeof cardStyles> & {
    width?: number | string;
    height?: number | string ;
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(({
    className,
    children,
    width,
    height,
    ...props
}, ref) => {
    const inlineStyles = {
        width: typeof width === 'number' ? `w-[${width}px]` : width,
        height: typeof height === 'number' ? `h-[${height}px]` : height,
    };

    return (
        <Card
            width={width}
            height={height}
            ref={ref}
            style={inlineStyles}
            className={cn(cardStyles(), className)}
            {...props}
        >
            {children}
        </Card>
    );
});

export default Alert;
