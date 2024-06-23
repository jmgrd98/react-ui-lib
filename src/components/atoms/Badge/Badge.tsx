import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../../utils";

const badgeStyles = cva('w-full rounded-full px-3 py-1', {
    variants: {
        variant: {
            solid: '',
            outline: 'bg-transparent border-2'
        },
        size: {
            sm: 'text-sm',
            base: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-2xl',
            '3xl': 'text-3xl',
            '4xl': 'text-4xl',
            '5xl': 'text-5xl',
            '6xl': 'text-6xl',
        },
    },
    defaultVariants: {
        variant: 'solid',
        size: 'base',
    }
});

type BadgeProps = ComponentProps<'span'> & VariantProps<typeof badgeStyles> & {
    color?: string;
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({
    size,
    variant,
    color,
    className,
    ...props
}, ref) => {
    const style = variant === 'solid'
        ? { backgroundColor: color, color: 'white' }
        : { borderColor: color, color: color };

    const combinedClass = cn(
        badgeStyles({ size, variant }),
        className
    );

    return (
        <span
            ref={ref}
            className={combinedClass}
            style={style}
            {...props}
        />
    );
});

export default Badge;
