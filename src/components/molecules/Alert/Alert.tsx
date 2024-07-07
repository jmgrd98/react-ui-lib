import React from 'react';
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, ReactElement } from "react";
import { cn } from "../../../utils";
import Card from "../Card/Card";

const alertStyles = cva('w-full rounded-lg shadow-lg bg-white p-5 flex flex-col justify-evenly');

type AlertProps = ComponentProps<'div'> & VariantProps<typeof alertStyles> & {
    width?: number | string;
    height?: number | string;
    icon?: ReactElement;  // New prop to accept a React element
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(({
    className,
    children,
    width,
    height,
    icon,
    ...props
}, ref) => {
    const inlineStyles = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
    };

    return (
        <Card
            width={width}
            height={height}
            ref={ref}
            style={inlineStyles}
            className={cn(alertStyles(), className)}
            {...props}
        >
            {icon && <div data-testid="icon" className="icon-container mb-2">{icon}</div>}
            {children}
        </Card>
    );
});

export default Alert;
