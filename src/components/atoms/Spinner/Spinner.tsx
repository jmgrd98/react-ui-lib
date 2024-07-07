import React from 'react';
import { forwardRef } from "react";
import { cn } from "../../../utils";

export type SpinnerProps = {
    className?: string;
};

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(({ className }, ref) => {
    return (
        <div
            data-testid="spinner"
            ref={ref}
            className={cn('border-4 border-solid border-blue-500 border-t-transparent rounded-full animate-spin', className)}
        ></div>
    );
});

export default Spinner;
