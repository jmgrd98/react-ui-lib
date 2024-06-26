import { forwardRef, useState } from 'react';
import { cn } from '../../../utils';

export interface SliderProps {
    value: number;
    min?: number;
    max?: number;
    step?: number;
    className?: string;
    onChange?: (value: number) => void;
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(
    ({ value, min = 0, max = 100, step = 1, className = '', onChange }, ref) => {
        const [sliderValue, setSliderValue] = useState(value);

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = parseInt(event.target.value, 10);
            setSliderValue(newValue);
            if (onChange) {
                onChange(newValue);
            }
        };

        return (
            <input
                ref={ref}
                type="range"
                min={min}
                max={max}
                step={step}
                value={sliderValue}
                onChange={handleChange}
                className={cn('slider', className)}
            />
        );
    }
);

export default Slider;
