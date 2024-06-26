import React from 'react';
import { cn } from '../../../utils';

export type GridProps = {
    cols?: 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
    className?: string;
    children: React.ReactNode;
};

const Grid = ({ cols = 'auto', gap = '4', className, children }: GridProps) => {
    const classes = cn(
        'grid',
        `grid-cols-${cols}`,
        `gap-${gap}`,
        className
    );

    return <div className={classes}>{children}</div>;
};

export default Grid;
