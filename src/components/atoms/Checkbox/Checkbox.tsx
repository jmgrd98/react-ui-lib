import './Checkbox.css';
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../../utils";

const checkboxStyles = cva('', {
    variants: {
        shape: {
            square: 'rounded-none',
            round: 'rounded-full',
        },
        size: {
            sm: 'w-4 h-4',
            base: 'w-5 h-5',
            lg: 'w-6 h-6',
            xl: 'w-7 h-7',
        },
    },
    defaultVariants: {
        shape: 'square',
        size: 'base',
    }
});

type CheckboxProps = ComponentProps<'input'> & VariantProps<typeof checkboxStyles> & {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
    size,
    shape,
    color,
    className,
    onChange,
    ...props
}, ref) => {
    return (
        <div className="inline-flex items-center">
            <input
                type="checkbox"
                ref={ref}
                className={cn(
                    'appearance-none border-2 focus:outline-none cursor-pointer',
                    checkboxStyles({ size, shape }),
                    color,
                    className
                )}
                onChange={onChange}
                {...props}
            />
            <span className={cn(
                'inline-block',
                size === 'sm' && 'ml-2 text-sm',
                size === 'base' && 'ml-2 text-base',
                size === 'lg' && 'ml-2 text-lg',
                size === 'xl' && 'ml-2 text-xl',
            )}>
                {props.children}
            </span>
        </div>
    );
});

export default Checkbox;
