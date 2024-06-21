import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils";

const buttonStyles = cva([
    'w-full',
    'rounded-md',
    'font-semibold',
    'focus:outline-none',
    'disabled:cursor-not-allowed'
    ],
    {
        variants: {
            variant: {
                solid: [
                    ''
                ],
                outline: [
                    'border-2'
                ],
                ghost: [
                    'transition-colors duration-300'
                ],
            },
            size: {
                sm: 'px-4 py-2 text-sm',
                md: 'px-4 py-2 text-base',
                lg: 'px-6 py-3 text-lg'
            },
            colorScheme: {
                primary: "text-white",
                success: "bg-success-500 text-white",
                danger: "bg-danger-500 text-white",
                alert: "bg-yellow-500 text-black"
            },
        },
        compoundVariants: [
            {
                variant: 'solid',
                colorScheme: 'primary',
                className: 'bg-primary-500 hover:bg-primary-600',
            },
            {
                variant: 'outline',
                colorScheme: 'primary',
                className: 'text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100',
            },
            {
                variant: 'ghost',
                colorScheme: 'primary',
                className: 'text-primary-600 bg-transparent hover:bg-primary-100',
            },
            {
                variant: 'solid',
                colorScheme: 'success',
                className: 'bg-success-500 hover:bg-success-600' // Fixed the typo here
            },
            {
                variant: 'outline',
                colorScheme: 'success',
                className: 'text-success-600 border-success-500 bg-transparent hover:bg-success-100',
            },
            {
                variant: 'ghost',
                colorScheme: 'success',
                className: 'text-success-600 bg-transparent hover:bg-success-100',
            },
            {
                variant: 'solid',
                colorScheme: 'danger',
                className: 'bg-danger-500 hover:bg-danger-600',
            },
            {
                variant: 'outline',
                colorScheme: 'danger',
                className: 'text-danger-600 border-danger-500 bg-transparent hover:bg-danger-100',
            },
            {
                variant: 'ghost',
                colorScheme: 'danger',
                className: 'text-danger-600 bg-transparent hover:bg-danger-100',
            },
            {
                variant: 'solid',
                colorScheme: 'alert',
                className: 'bg-yellow-500 hover:bg-yellow-600',
            },
            {
                variant: 'outline',
                colorScheme: 'alert',
                className: 'text-yellow-600 border-yellow-500 bg-transparent hover:bg-yellow-100',
            },
            {
                variant: 'ghost',
                colorScheme: 'alert',
                className: 'text-yellow-600 bg-transparent hover:bg-yellow-100',
            },
        ],
        defaultVariants: {
            variant: "solid",
            size: "md",
            colorScheme: "primary"
        }
    }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    variant,
    size,
    colorScheme,
    className,
    onClick,
    ...props
}, ref) => {
    return (
        <button
            ref={ref}
            className={cn(buttonStyles({variant, size, colorScheme}))}
            onClick={onClick}
            {...props}
        />
    )
})

export default Button;
