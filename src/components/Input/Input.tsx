import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils";
import { Text } from "../Text/Text";

const inputStyles = cva([
    'w-full',
    'border',
    'border-gray-200',
    'p-2',
    'rounded-lg',
    'transition-all',
    'duration-100',
    'outline-none',
    'focus:outline-primary-500',
    'focus:border-transparent',
    'placeholder:text-gray-400',
    'placeholder:text-sm',
]);

type InputProps = ComponentProps<"input"> & {
    label?: string;
  } & VariantProps<typeof inputStyles>;

const formatCpf = (value: string) => {
    return value
        .replace(/\D/g, '')
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

const formatCnpj = (value: string) => {
    return value
        .replace(/\D/g, '')
        .slice(0, 14)
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d{1,2})$/, '$1-$2');
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({
    className,
    type,
    label,
    placeholder,
    ...props
}, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = e.target;
        if (type === 'cpf') {
            value = formatCpf(value);
        } else if (type === 'cnpj') {
            value = formatCnpj(value);
        }
        e.target.value = value;
        props.onChange && props.onChange(e);
    };

    return (
        <>
            {label && <Text as="label" htmlFor="username" size={'sm'} weight={'medium'} className='mb-1.5'>{label}</Text>}
            <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            autoComplete="off"
            className={cn(inputStyles({ className }))}
            onChange={handleChange}
            {...props}
        />
        </>
    );
});
