import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react"
import { cn } from "../../../utils";
import { Text } from "../Text/Text";

const textareaStyles = cva([
    'w-full',
    'border',
    'border-gray-200',
    'p-2',
    'rounded-lg',
    'transition-all',
    'duration-100',
    'outlin-none',
    'focus:outline-primary-500',
    'focus:border-transparent',
    'placeholder:text-gray-400',
    'placeholder:text-sm',
]);

type TextareaProps = ComponentProps<"textarea"> & {
    label?: string;
  } & VariantProps<typeof textareaStyles>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
    className,
    placeholder,
    label,
    disabled,
    ...props
}, ref) => {
    return (
        <>
            {label && <Text as="label" htmlFor="username" size={'sm'} weight={'medium'} className='mb-1.5'>{label}</Text>}
            <textarea
            disabled={disabled}
            ref={ref}
            placeholder={placeholder}
            autoComplete="off"
            className={cn(textareaStyles({className}))}
            {...props}
            />
        </>
    )
});