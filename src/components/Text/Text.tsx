import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const textStyles = cva('w-full', {
    variants: {
        emphasis: {
            low: "text-gray-600 font-light",
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
        weight: {
            thin: 'font-thin',
            normal: 'font-normal',
            medium: 'font-medium',
            bold: 'font-bold',
            extrabold: 'font-extrabold',
            black: 'font-black',
        },
        align: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
        },
        italic: {
            true: 'italic'
        },
        underline: {
            true: 'underline underline-offset-2'
        },
        defaultVariants: {
            size: 'base',
            align: 'left'
        }
    }
});

type TextProps = ComponentProps<'span'> & VariantProps<typeof textStyles>;

export const Text = forwardRef<HTMLSpanElement, TextProps>(({
    ...props
}, ref) => {
    return <span ref={ref} {...props}/>
})