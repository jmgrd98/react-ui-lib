import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { cn } from '../../../utils';

export interface RangeSliderProps {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: [number, number];
    onChange?: (values: [number, number]) => void;
    className?: string;
}

const RangeSlider = forwardRef<HTMLInputElement, RangeSliderProps>(
    ({ min = 0, max = 100, step = 1, defaultValue = [min, max], onChange, className = '' }, ref) => {
        const [values, setValues] = useState<[number, number]>(defaultValue);
        const [isDragging, setIsDragging] = useState<boolean>(false);

        const rangeRef = useRef<HTMLDivElement>(null);
        const thumb1Ref = useRef<HTMLDivElement>(null);
        const thumb2Ref = useRef<HTMLDivElement>(null);

        const handleChange = (newValue: [number, number]) => {
            setValues(newValue);
            if (onChange) {
                onChange(newValue);
            }
        };

        const handleMouseDown = (index: number) => {
            setIsDragging(true);
            const handleMouseMove = (event: MouseEvent) => {
                if (!isDragging || !rangeRef.current || !thumb1Ref.current || !thumb2Ref.current) return;
                const rangeRect = rangeRef.current.getBoundingClientRect();
                const offsetX = event.clientX - rangeRect.left;
                const newValue = Math.round(((max - min) * offsetX) / rangeRect.width + min);
                const newValues = [...values];
                newValues[index] = newValue < values[1 - index] ? newValue : values[1 - index];
                newValues[index] = Math.max(min, Math.min(max, newValues[index]));
                handleChange(newValues);
            };
            const handleMouseUp = () => setIsDragging(false);
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        };

        useEffect(() => {
            return () => {
                document.removeEventListener('mousemove', () => {});
                document.removeEventListener('mouseup', () => {});
            };
        });

        const sliderBackgroundStyle: React.CSSProperties = {
            background: `linear-gradient(to right, #4CAF50 ${((values[0] - min) / (max - min)) * 100}%, #4CAF50 ${((values[1] - min) / (max - min)) * 100}%, #ccc ${((values[1] - min) / (max - min)) * 100}%)`,
        };

        return (
            <div ref={ref} className={cn('slider', className)}>
                <div className="relative w-full h-1 bg-gray-300 rounded-full" ref={rangeRef}>
                    <div
                        ref={thumb1Ref}
                        className="absolute w-4 h-4 bg-white border border-gray-300 rounded-full shadow-md cursor-pointer transform -translate-x-2 -translate-y-1/2"
                        style={{ left: `${((values[0] - min) / (max - min)) * 100}%` }}
                        onMouseDown={() => handleMouseDown(0)}
                    />
                    <div
                        ref={thumb2Ref}
                        className="absolute w-4 h-4 bg-white border border-gray-300 rounded-full shadow-md cursor-pointer transform -translate-x-2 -translate-y-1/2"
                        style={{ left: `${((values[1] - min) / (max - min)) * 100}%` }}
                        onMouseDown={() => handleMouseDown(1)}
                    />
                    <div className="absolute top-0 left-0 h-full" style={sliderBackgroundStyle} />
                </div>
            </div>
        );
    }
);

export default RangeSlider;
