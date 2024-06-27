import { ReactNode, useState } from "react";
import { cn } from "../../../utils";

export type TooltipProps = {
    content: ReactNode;
    position?: 'top' | 'right' | 'bottom' | 'left';
    className?: string;
    children: ReactNode;
};

const Tooltip = ({ content, position = 'top', className, children }: TooltipProps) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="relative inline-block m-4">
            <div
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                className="cursor-pointer"
            >
                {children}
            </div>
            {isVisible && (
                <div
                    className={cn(
                        "absolute z-10 p-2 text-sm rounded shadow-lg transition-opacity duration-300",
                        position === 'top' && 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
                        position === 'right' && 'left-full top-1/2 transform -translate-y-1/2 ml-2',
                        position === 'bottom' && 'top-full left-1/2 transform -translate-x-1/2 mt-2',
                        position === 'left' && 'right-full top-1/2 transform -translate-y-1/2 mr-2',
                        className
                    )}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
