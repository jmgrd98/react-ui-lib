import React from 'react';
import { cva, VariantProps } from "class-variance-authority";
import { ChangeEvent, ComponentProps, forwardRef, useState, useRef, useEffect } from "react";
import { cn } from "../../../utils";
import { FaChevronDown } from "react-icons/fa";
import Input from "../Input/Input";

const selectStyles = cva('', {
    variants: {
        shape: {
            square: 'rounded-none',
            round: 'rounded-full',
        },
        size: {
            sm: 'px-2 py-1 text-sm',
            base: 'px-3 py-2 text-base',
            lg: 'px-4 py-3 text-lg',
            xl: 'px-5 py-4 text-xl',
        },
        state: {
            disabled: 'opacity-50 cursor-not-allowed',
            error: 'border-red-500 text-red-600',
        },
    },
    compoundVariants: [],
    defaultVariants: {
        shape: 'square',
        size: 'base',
    }
});

type OptionObject = { label: string; value: string };
type OptionType = OptionObject | string;

type SelectProps = ComponentProps<'div'> & VariantProps<typeof selectStyles> & {
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    options: OptionType[];
    error?: boolean;
    search?: boolean;
    disabled?: boolean;
    showIcon?: boolean;
    placeholder?: string;
};

export const Select = forwardRef<HTMLDivElement, SelectProps>(({
    options,
    className,
    disabled,
    error,
    search,
    showIcon = true,
    onChange,
    placeholder = 'Select',
    ...props
}, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    const handleOptionClick = (value: string) => {
        if (!disabled) {
            setSelectedOption(value);
            setIsOpen(false);
            setSearchTerm('');
            if (onChange) {
                onChange({
                    target: {
                        value,
                        id: props.id || '',
                    },
                } as ChangeEvent<HTMLSelectElement>);
            }
        }
    };

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const isOptionObject = (option: OptionType): option is OptionObject => {
        return (option as OptionObject).label !== undefined && (option as OptionObject).value !== undefined;
    };

    const filteredOptions = options.filter(option => {
        const label = isOptionObject(option) ? option.label : option;
        return label.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const getOptionLabel = (option: OptionType): string => {
        return isOptionObject(option) ? option.label : option;
    };

    const getOptionValue = (option: OptionType): string => {
        return isOptionObject(option) ? option.value : option;
    };

    return (
        <div className="relative w-full" ref={ref}>
            <div
                className={cn(
                    'appearance-none border-2 focus:outline-none cursor-pointer flex items-center justify-between',
                    selectStyles({ state: disabled ? 'disabled' : error ? 'error' : undefined }),
                    error ? 'border-red-600' : 'bg-white text-gray-800',
                    'border-gray-300',
                    'rounded',
                    error ? '' : 'hover:border-gray-400',
                    'focus:border-blue-500',
                    'py-2 px-4',
                    error ? 'border-red-600' : 'border-gray-300',
                    className
                )}
                onClick={toggleDropdown}
                ref={selectRef}
            >
                <span>{selectedOption ? getOptionLabel(options.find(option => getOptionValue(option) === selectedOption)!) : placeholder}</span>
                {showIcon && <FaChevronDown
                                className={cn(
                                    'ml-2',
                                    'transform',
                                    isOpen ? 'rotate-180' : 'rotate-0',
                                    'transition-transform',
                                    'duration-300',
                                    error ? 'text-red-600' : 'text-gray-600'
                                )}
                            />
                        }
            </div>
            {isOpen && (
                <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
                    {search && <Input
                        type="text"
                        className="w-full p-2 border-b-2 border-gray-300"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />}
                    <div className="bg-white w-full w-60 overflow-y-auto">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map(option => (
                                <div
                                    key={getOptionValue(option)}
                                    className={cn(
                                        'cursor-pointer py-2 px-4',
                                        'hover:bg-gray-100',
                                        'hover:text-gray-900',
                                        'select-none',
                                    )}
                                    onClick={() => handleOptionClick(getOptionValue(option))}
                                >
                                    {getOptionLabel(option)}
                                </div>
                            ))
                        ) : (
                            <div className="py-2 px-4 text-gray-500">No options found</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
});

export default Select;
