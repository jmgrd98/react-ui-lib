import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../../utils";

const badgeStyles = cva('w-full rounded-full px-3 py-1', {
    variants: {
        variant: {
            solid: [''],
            outline: ['bg-transparent border-2']
        },
        colorScheme: {
            primary: 'bg-primary-500 text-white',
            success: 'bg-success-500 text-white',
            danger: 'bg-danger-500 text-white',
            alert: 'bg-yellow-500 text-black',
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
    compoundVariants: [
        {
            variant: 'solid',
            colorScheme: 'primary',
            className: 'bg-primary-500 text-white',
        },
        {
            variant: 'outline',
            colorScheme: 'primary',
            className: 'bg-transparent border-primary-500 text-primary-600',
        },
        {
            variant: 'solid',
            colorScheme: 'success',
            className: 'bg-success-500 text-white',
        },
        {
            variant: 'outline',
            colorScheme: 'success',
            className: 'bg-transparent border-success-500 text-success-600',
        },
        {
            variant: 'solid',
            colorScheme: 'danger',
            className: 'bg-danger-500 text-white',
        },
        {
            variant: 'outline',
            colorScheme: 'danger',
            className: 'bg-transparent border-danger-500 text-danger-600',
        },
        {
            variant: 'solid',
            colorScheme: 'alert',
            className: 'bg-yellow-500 text-black',
        },
        {
            variant: 'outline',
            colorScheme: 'alert',
            className: 'bg-transparent border-yellow-500 text-yellow-600',
        },
    ],
    defaultVariants: {
        variant: 'solid',
        colorScheme: 'primary',
        size: 'base',
    }
});

type BadgeProps = ComponentProps<'span'> & VariantProps<typeof badgeStyles>;

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({
    size,
    variant,
    colorScheme,
    className,
    ...props
}: BadgeProps, ref) => {
    return (
        <span 
            ref={ref}
            className={cn(badgeStyles({ size, variant, colorScheme }), className)}
            {...props}
        />
    );
});

export default Badge;
