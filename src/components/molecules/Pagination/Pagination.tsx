import React, { forwardRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

export type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
};

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
    ({ currentPage, totalPages, onPageChange, className }, ref) => {
        const handlePageChange = (page: number) => {
            if (page > 0 && page <= totalPages) {
                onPageChange(page);
            }
        };

        const renderPageNumbers = () => {
            const pages = [];
            let startPage = 1;
            let endPage = totalPages;

            if (totalPages > 10) {
                if (currentPage <= 6) {
                    endPage = 10;
                } else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                } else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(
                    <button
                        key={i}
                        className={`px-3 py-1 rounded-md ${
                            i === currentPage
                                ? 'bg-blue-500 text-white'
                                : 'bg-white text-blue-500 border border-gray-300'
                        }`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </button>
                );
            }

            if (totalPages > 10) {
                if (startPage > 1) {
                    pages.unshift(
                        <span key="start-ellipsis" className="px-3 py-1">
                            ...
                        </span>
                    );
                    pages.unshift(
                        <button
                            key="1"
                            className="px-3 py-1 rounded-md bg-white text-blue-500 border border-gray-300"
                            onClick={() => handlePageChange(1)}
                        >
                            1
                        </button>
                    );
                }

                if (endPage < totalPages) {
                    pages.push(
                        <span key="end-ellipsis" className="px-3 py-1">
                            ...
                        </span>
                    );
                    pages.push(
                        <button
                            key={totalPages}
                            className="px-3 py-1 rounded-md bg-white text-blue-500 border border-gray-300"
                            onClick={() => handlePageChange(totalPages)}
                        >
                            {totalPages}
                        </button>
                    );
                }
            }

            return pages;
        };

        return (
            <div ref={ref} className={`flex items-center space-x-2 ${className}`}>
                <button
                    className="px-3 py-1 rounded-md bg-white text-blue-500 border border-gray-300 disabled:opacity-50"
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                >
                    <FaAngleDoubleLeft />
                </button>
                <button
                    className="px-3 py-1 rounded-md bg-white text-blue-500 border border-gray-300 disabled:opacity-50"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <FaChevronLeft />
                </button>
                {renderPageNumbers()}
                <button
                    className="px-3 py-1 rounded-md bg-white text-blue-500 border border-gray-300 disabled:opacity-50"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <FaChevronRight />
                </button>
                <button
                    className="px-3 py-1 rounded-md bg-white text-blue-500 border border-gray-300 disabled:opacity-50"
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                >
                    <FaAngleDoubleRight />
                </button>
            </div>
        );
    }
);

Pagination.displayName = 'Pagination';

export default Pagination;
