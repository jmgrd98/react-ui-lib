import { cva } from "class-variance-authority";
import { ComponentProps } from "react";

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
                small: ['text-sm', 'py-1', 'px-2'],
                medium: ['text-base', 'py-2', 'px-4'],
                large: ['text-lg', 'py-4', 'px-8']
            },
            colorScheme: {
                primary: [
                    'bg-blue-500',
                    'text-white',
                    'hover:bg-blue-600',
                    'active:bg-blue-700'
                ],
                secondary: [
                    'bg-white',
                    'text-black',
                    'hover:bg-gray-100',
                    'active:bg-gray-200'
                ],
                destructive: [
                    'bg-red-500',
                    'text-white',
                    'hover:bg-red-600',
                    'active:bg-red-700'
                ],
                success: [
                    'bg-green-500',
                    'text-white',
                    'hover:bg-green-600',
                    'active:bg-green-700'
                ],
            },
        },
        compoundVariants: [
            {
                variant: 'solid',
                colorScheme: 'primary',
                className: 'text-white',
            },
            {
                variant: 'solid',
                colorScheme: 'secondary',
                className: 'text-black',
            },
            {
                variant: 'solid',
                colorScheme: 'destructive',
                className: 'text-white',
            },
            {
                variant: 'solid',
                colorScheme: 'success',
                className: 'text-white',
            },
        ]
    }
);

type ButtonProps = ComponentProps<"button">;

export const Button = ({...props}: ButtonProps) => {
  return (
    <button className='bg-black text-blue-500' {...props}>
      {props.title}
    </button>
  )
}

export default Button
