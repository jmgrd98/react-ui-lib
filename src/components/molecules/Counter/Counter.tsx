import { useState, forwardRef, useImperativeHandle } from 'react';
import Button from '../../atoms/Button/Button';

export interface CounterProps {
    initialCount?: number;
    min?: number;
    max?: number;
    className?: string;
}

export interface CounterHandle {
    reset: () => void;
}

const Counter = forwardRef<CounterHandle, CounterProps>(
    ({ initialCount = 0, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER, className }, ref) => {
        const [count, setCount] = useState(initialCount);

        useImperativeHandle(ref, () => ({
            reset: () => setCount(initialCount)
        }));

        const increment = () => {
            setCount((prevCount) => Math.min(prevCount + 1, max));
        };

        const decrement = () => {
            setCount((prevCount) => Math.max(prevCount - 1, min));
        };

        return (
            <div className={`flex items-center gap-5 justify-center space-x-4 ${className}`}>
                <Button
                    label='-'
                    onClick={decrement}
                    className="w-20 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                />
                <p data-testid="counter">{count}</p>
                <Button
                    label='+'
                    onClick={increment}
                    className="w-20 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                />
            </div>
        );
    }
);

export default Counter;
