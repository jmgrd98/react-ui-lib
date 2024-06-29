import React, { forwardRef, useImperativeHandle, ReactNode, CSSProperties } from 'react';
import { FaTimes } from 'react-icons/fa';
import { cn } from '../../../utils';

export type DrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    side?: 'left' | 'right' | 'top' | 'bottom';
    children: ReactNode;
    className?: string;
};

export type DrawerHandle = {
    open: () => void;
    close: () => void;
};

const Drawer = forwardRef<DrawerHandle, DrawerProps>(
    ({ isOpen, onClose, side = 'left', children, className }, ref) => {
        useImperativeHandle(ref, () => ({
            open: () => onClose(),
            close: () => onClose(),
        }));

        const sideClasses = {
            left: isOpen ? 'translate-x-0' : '-translate-x-full',
            right: isOpen ? 'translate-x-0' : 'translate-x-full',
            top: isOpen ? 'translate-y-0' : '-translate-y-full',
            bottom: isOpen ? 'translate-y-0' : 'translate-y-full',
        };

        const positionClass = sideClasses[side] || sideClasses.left;

        return (
            <div className={cn("fixed inset-0 z-50", className)}>
                <div
                    className={cn(
                        "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
                        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                    onClick={onClose}
                />
                <div
                    className={cn(
                        "fixed z-10 transition-transform transform bg-white shadow-lg",
                        side === 'left' || side === 'right' ? 'w-80 h-full' : 'w-full h-80',
                        positionClass
                    )}
                    style={{ [side]: 0 }}
                >
                    <button className="absolute top-2 right-2 text-gray-500 hover:text-black" onClick={onClose}>
                        <FaTimes />
                    </button>
                    <div className="p-4">{children}</div>
                </div>
            </div>
        );
    }
);

Drawer.displayName = 'Drawer';

export default Drawer;
