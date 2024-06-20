import { cva } from "class-variance-authority";
import { ComponentProps } from "react";

type TextProps = ComponentProps<'span'>;

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
})

export const Text = ({...props}: TextProps) => {
    return <span {...props}>Text</span>
};