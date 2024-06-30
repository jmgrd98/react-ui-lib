import React, { forwardRef, useState } from 'react';
import { cn } from '../../../utils';

export interface SliderProps {
    value: number | number[];
    min?: number;
    max?: number;
    step?: number;
    className?: string;
    onChange?: (value: number | number[]) => void;
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(
    ({ value, min = 0, max = 100, step = 1, className = '', onChange }, ref) => {
        const [sliderValue, setSliderValue] = useState<number | number[]>(value);

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = parseInt(event.target.value, 10);
            setSliderValue(newValue);
            if (onChange) {
                onChange(newValue);
            }
        };

        const isArrayValue = Array.isArray(sliderValue);
        const sliderValues = isArrayValue ? sliderValue : [sliderValue, sliderValue];

        return (
            <input
                ref={ref}
                type="range"
                min={min}
                max={max}
                step={step}
                value={sliderValues[0]}
                onChange={handleChange}
                className={cn('slider', className)}
            />
        );
    }
);

export default Slider;
