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
            solid: ['transition-colors duration-300'],
            outline: ['transition-colors duration-300 border-2'],
            ghost: ['transition-colors duration-300'],
        },
        size: {
            sm: 'w-20 px-2 py-2 text-sm',
            md: 'w-full px-4 py-2 text-base',
            lg: 'px-6 py-3 text-lg',
        },
    },
    defaultVariants: {
        variant: "solid",
        size: "md",
    }
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles> & {
    backgroundColor?: string;
    label: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    variant,
    size,
    backgroundColor,
    label,
    className,
    onClick,
    ...props
}, ref) => {
    const buttonClass = cn(
        buttonStyles({ variant, size }),
        className
    );

    const dynamicStyle = backgroundColor ? { backgroundColor } : {};

    const outlineStyle = backgroundColor
        ? { borderColor: backgroundColor, color: backgroundColor }
        : {};

    const combinedStyles = 
        variant === 'solid' ? dynamicStyle :
        variant === 'outline' ? outlineStyle :
        {};

    const hoverEffectStyles = 
        variant === 'solid' ? { backgroundColor: `${backgroundColor}90` } :
        variant === 'outline' ? { backgroundColor: `${backgroundColor}20` } :
        variant === 'ghost' ? { backgroundColor: `${backgroundColor}20` } : {};

    const ghostStyles = variant === 'ghost' && backgroundColor ? {
        color: backgroundColor,
        backgroundColor: 'transparent'
    } : {};

    return (
        <button
            ref={ref}
            className={buttonClass}
            style={{ ...combinedStyles, ...ghostStyles }}
            onClick={onClick}
            {...props}
            onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, hoverEffectStyles);
            }}
            onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, combinedStyles, ghostStyles);
            }}
        >
            {label}
        </button>
    );
});

export default Button;
