import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../../utils";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type CarouselProps = {
    children: React.ReactNode[];
    className?: string;
    interval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({ children, className, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = children.length;
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentIndex((prevIndex) =>
                    prevIndex === length - 1 ? 0 : prevIndex + 1
                ),
            interval
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex, interval, length]);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={cn("relative overflow-hidden", className)}>
            <FaChevronLeft
                onClick={goToPrevious}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-black p-2"
            />
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {children}
            </div>
            <FaChevronRight
                onClick={goToNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-black p-2"
            />
        </div>
    );
};

export default Carousel;
