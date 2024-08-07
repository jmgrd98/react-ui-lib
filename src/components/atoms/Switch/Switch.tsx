import React from 'react';
import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../../../utils';
import '@testing-library/jest-dom';

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
};

const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ checked, onChange, className, ...props }, ref) => {
    return (
        <label className={cn("relative inline-flex items-center cursor-pointer", className)}>
            <input
                type="checkbox"
                className="sr-only peer"
                checked={checked}
                onChange={(e) => onChange && onChange(e.target.checked)}
                ref={ref}
                {...props}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-600 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
    );
});

Switch.displayName = 'Switch';

export default Switch;
