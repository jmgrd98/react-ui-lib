import React, { forwardRef, useState } from 'react';
import { cn } from '../../../utils';

export type StepperProps = {
    value: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void;
    className?: string;
};

const Stepper = forwardRef<HTMLInputElement, StepperProps>(({
    value,
    min = 0,
    max = 100,
    step = 1,
    onChange,
    className,
    ...props
}, ref) => {
    const [internalValue, setInternalValue] = useState(value);

    const increaseValue = () => {
        const newValue = internalValue + step > max ? max : internalValue + step;
        setInternalValue(newValue);
        onChange && onChange(newValue);
    };

    const decreaseValue = () => {
        const newValue = internalValue - step < min ? min : internalValue - step;
        setInternalValue(newValue);
        onChange && onChange(newValue);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = parseInt(e.target.value, 10);
        if (isNaN(newValue)) {
            newValue = min;
        } else if (newValue < min) {
            newValue = min;
        } else if (newValue > max) {
            newValue = max;
        }
        setInternalValue(newValue);
        onChange && onChange(newValue);
    };

    return (
        <div className={cn('flex items-center', className)}>
            <button
                type="button"
                className="px-2 py-1 border border-gray-300 rounded-l cursor-pointer"
                onClick={decreaseValue}
            >
                -
            </button>
            <input
                ref={ref}
                type="number"
                value={internalValue}
                min={min}
                max={max}
                step={step}
                onChange={handleInputChange}
                className="px-2 py-1 border-t border-b border-gray-300 text-center w-16"
                {...props}
            />
            <button
                type="button"
                className="px-2 py-1 border border-gray-300 rounded-r cursor-pointer"
                onClick={increaseValue}
            >
                +
            </button>
        </div>
    );
});

export default Stepper;
