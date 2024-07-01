import React, { useState } from "react";
import { cn } from "../../../utils";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type CarouselProps = {
    children: React.ReactNode[];
    className?: string;
    visibleCount?: number;
    slideCount?: number;
}

const Carousel: React.FC<CarouselProps> = ({ children, className, visibleCount = 1, slideCount = 1 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = children.length;

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - slideCount < 0 ? 0 : prevIndex - slideCount));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + slideCount >= length ? length - visibleCount : prevIndex + slideCount));
    };

    return (
        <div className={cn("w-full relative flex items-center justify-between", className)}>
            <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 cursor-pointer z-10"
            >
                <FaChevronLeft className="text-gray-700" />
            </button>
            <div className="max-w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`, width: `${100 * (length / visibleCount)}%` }}
                >
                    {React.Children.map(children, (child, index) => (
                        <div className="w-full " key={index} style={{ flex: `0 0 ${100 / visibleCount}%` }}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 cursor-pointer z-10"
            >
                <FaChevronRight className="text-gray-700" />
            </button>
        </div>
    );
};

export default Carousel;
