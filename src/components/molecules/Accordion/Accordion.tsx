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

type AccordionItemProps = {
    title: string;
    children: ReactNode;
};


const AccordionItem = ({ title, children }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="border-b">
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
};

const Accordion = ({
    children,
    className,
    ...props
}: AccordionProps) => {
    return (
        <div
            className={cn(accordionStyles(), className)}
            {...props}
        >
            {children}
        </div>
    );
};

Accordion.Item = AccordionItem;

export default Accordion;
