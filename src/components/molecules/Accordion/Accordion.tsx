import React from 'react';
import { forwardRef, ReactNode, useState } from "react";
import { cn } from "../../../utils";
import { cva } from "class-variance-authority";

const accordionStyles = cva([
    'w-full',
    'transition-all',
    'duration-300'
], {
    variants: {}
});

export type AccordionProps = {
    children: ReactNode;
    className?: string;
};

type ItemProps = {
    title: string;
    children: ReactNode;
};

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(({
    children,
    className,
    ...props
}, ref) => {
    return (
        <div
            ref={ref}
            className={cn(accordionStyles(), 'border', className)}
            {...props}
        >
            {children}
        </div>
    );
});

export const Item = forwardRef<HTMLDivElement, ItemProps>(({
    title,
    children,
    ...props
}, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div ref={ref} className="border-b" {...props}>
            <button
                onClick={toggleOpen}
                className="w-full text-left p-4 font-medium flex justify-between items-center"
            >
                {title}
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            <div
                className={cn(
                    'overflow-hidden transition-max-height duration-300',
                    { 'max-h-0': !isOpen, 'max-h-screen': isOpen }
                )}
            >
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
});
