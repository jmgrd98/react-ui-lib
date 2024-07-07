import React from 'react';
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { cn } from "../../../utils";
import { Text } from "../Text/Text";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
    type?: 'text' | 'password' | 'number' | 'date' | 'cpf' | 'cnpj' | 'pin';
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

const formatPin = (value: string) => {
    return value.replace(/\D/g, '').slice(0, 4);
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({
    className,
    type = 'text',
    label,
    placeholder,
    ...props
}, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = e.target;
        switch (type) {
            case 'cpf':
                value = formatCpf(value);
                break;
            case 'cnpj':
                value = formatCnpj(value);
                break;
            case 'pin': // Handle PIN format
                value = formatPin(value);
                break;
            case 'number':
                value = value.replace(/\D/g, '');
                break;
            case 'date':
                break;
            default:
                break;
        }
        e.target.value = value;
        props.onChange && props.onChange(e);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
        <>
            {label && <Text as="label" htmlFor={props.id} size={'sm'} weight={'medium'} className='mb-1.5'>{label}</Text>}
            <div className="relative">
                <input
                    ref={ref}
                    type={inputType}
                    placeholder={placeholder}
                    autoComplete="off"
                    className={cn(inputStyles({ className }))}
                    onChange={handleChange}
                    {...props}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 px-3 flex items-center"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaEye className="h-5 w-5 text-gray-400" /> : <FaEyeSlash className="h-5 w-5 text-gray-400" />}
                    </button>
                )}
            </div>
        </>
    );
});

export default Input;
