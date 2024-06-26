import { forwardRef } from "react";
import { cn } from "../../../utils";

export type ProgressProps = {
    value: number;
    max: number;
    className?: string;
};

const Progress = forwardRef<HTMLDivElement, ProgressProps>(({ value, max, className }, ref) => {
    const percentage = (value / max) * 100;
    return (
        <div ref={ref} className={cn('w-full bg-gray-200 rounded-full h-4', className)}>
            <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
});

export default Progress;
