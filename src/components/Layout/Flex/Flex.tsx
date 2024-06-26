import React from 'react';
import { cn } from '../../../utils';
import { Box, BoxProps } from '../Box/Box';


export type FlexProps = {
    direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
    justify?: 'start' | 'end' | 'center' | 'between' | 'around';
    align?: 'start' | 'end' | 'center' | 'stretch';
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    className?: string;
    children: React.ReactNode;
};

const Flex = ({
    direction = 'row',
    justify = 'start',
    align = 'start',
    wrap = 'nowrap',
    className,
    children,
}: FlexProps) => {
    const classes = cn(
        'flex',
        `flex-${direction}`,
        `justify-${justify}`,
        `items-${align}`,
        `flex-${wrap}`,
        className
    );

    return <div className={classes}>{children}</div>;
};

export default Flex;
