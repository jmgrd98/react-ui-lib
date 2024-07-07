import React from 'react'
import { forwardRef } from "react";
import { cn } from "../../../utils";

export type ProgressProps = {
    value: number;
    max: number;
    className?: string;
};

const Progress = forwardRef<HTMLDivElement, ProgressProps>(({ value, max, className }, ref) => {
    let percentage = (value / max) * 100;
    if (max === 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    if (percentage < 0) percentage = 0;

    return (
        <div 
            ref={ref} 
            className={cn('w-full bg-gray-200 rounded-full h-4', className)} 
            data-testid="progress-bar-outer"
        >
            <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${percentage}%` }}
                data-testid="progress-bar-inner"
            ></div>
        </div>
    );
});

export default Progress;
