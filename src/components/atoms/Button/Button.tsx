import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../../utils";

const buttonStyles = cva([
    'w-full',
    'rounded-md',
    'font-semibold',
    'focus:outline-none',
    'disabled:cursor-not-allowed'
], {
    variants: {
        variant: {
            solid: [],
            outline: ['border-2'],
            ghost: ['transition-colors duration-300'],
        },
        size: {
            sm: 'w-20 px-2 py-2 text-sm',
            md: 'w-1/2 px-4 py-2 text-base',
            lg: 'px-6 py-3 text-lg',
        },
        colorScheme: {
            primary: "text-white bg-primary-500 hover:bg-primary-600",
            success: "text-white bg-success-500 hover:bg-success-600",
            danger: "text-white bg-danger-500 hover:bg-danger-600",
            alert: "text-black bg-yellow-500 hover:bg-yellow-600",
        },
    },
    compoundVariants: [
        {
            variant: 'outline',
            className: 'bg-transparent text-opacity-90 border-opacity-90',
        },
        {
            variant: 'ghost',
            className: 'text-opacity-90',
        },
    ],
    defaultVariants: {
        variant: "solid",
        size: "md",
        colorScheme: "primary"
    }
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles> & {
    color?: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    variant,
    size,
    color,
    className,
    onClick,
    ...props
}, ref) => {
    const buttonClass = cn(
        buttonStyles({ variant, size }),
        color,
        className
    );

    return (
        <button
            ref={ref}
            className={buttonClass}
            onClick={onClick}
            {...props}
        />
    );
});

export default Button;
