import { forwardRef, ReactNode, CSSProperties } from "react";
import { cn } from "../../../utils";
import Card from "../Card/Card";

export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    width?: number | string;
    height?: number | string;
    children: ReactNode;
};

const Modal = forwardRef<HTMLDivElement, ModalProps>(({
    isOpen,
    onClose,
    width,
    height,
    children,
    ...props
}, ref) => {
    if (!isOpen) return null;

    const inlineStyles: CSSProperties = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Card
                width={width}
                height={height}
                ref={ref}
                style={inlineStyles}
                className="relative"
                {...props}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                >
                    ✖
                </button>
                {children}
            </Card>
        </div>
    );
});

export default Modal;
