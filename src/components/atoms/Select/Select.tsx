import { cva, VariantProps } from "class-variance-authority";
import { ChangeEvent, ComponentProps, forwardRef, useState, useRef, useEffect } from "react";
import { cn } from "../../../utils";
import { FaChevronDown } from "react-icons/fa";

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
    },
    compoundVariants: [],
    defaultVariants: {
        shape: 'square',
        size: 'base',
    }
});

type SelectProps = ComponentProps<'select'> & VariantProps<typeof selectStyles> & {
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    options: { label: string; value: string }[];
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
    size,
    shape,
    color,
    options,
    className,
    onChange,
    ...props
}, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
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
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (value: string) => {
        setSelectedOption(value);
        setIsOpen(false);
        if (onChange) {
            const selectedOption = options.find(option => option.value === value);
            if (selectedOption) {
                onChange({
                    target: {
                        value: selectedOption.value,
                        name: props.name || '',
                    },
                } as ChangeEvent<HTMLSelectElement>);
            }
        }
    };

    return (
        <div className="relative" ref={selectRef}>
            <div
                className={cn(
                    'appearance-none border-2 focus:outline-none cursor-pointer flex items-center justify-between',
                    selectStyles({ size, shape }),
                    color,
                    'bg-white text-gray-800',
                    'border-gray-300',
                    'rounded',
                    'hover:border-gray-400',
                    'focus:border-blue-500',
                    'py-2 px-4',
                    className
                )}
                onClick={toggleDropdown}
            >
                <span>{selectedOption ? options.find(option => option.value === selectedOption)?.label : 'Select'}</span>
                <FaChevronDown
                    className={cn(
                        'ml-2',
                        'transform',
                        isOpen ? 'rotate-180' : 'rotate-0',
                        'transition-transform',
                        'duration-300'
                    )}
                />
            </div>
            {isOpen && (
                <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
                    {options.map(option => (
                        <div
                            key={option.value}
                            className={cn(
                                'cursor-pointer py-2 px-4',
                                'hover:bg-gray-100',
                                'hover:text-gray-900',
                                'select-none',
                            )}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});

export default Select;
