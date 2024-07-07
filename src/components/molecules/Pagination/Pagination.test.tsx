import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination'; // Update the import path as needed
import { FaChevronLeft, FaChevronRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

describe('Pagination', () => {
    test('renders correctly', () => {
        render(<Pagination currentPage={1} totalPages={20} onPageChange={jest.fn()} />);
        
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText('4')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByText('6')).toBeInTheDocument();
        expect(screen.getByText('7')).toBeInTheDocument();
        expect(screen.getByText('8')).toBeInTheDocument();
        expect(screen.getByText('9')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByText('...')).toBeInTheDocument();
        expect(screen.getByText('20')).toBeInTheDocument();
    });

    test('calls onPageChange callback correctly when a page number is clicked', () => {
        const handlePageChange = jest.fn();
        render(<Pagination currentPage={1} totalPages={20} onPageChange={handlePageChange} />);

        fireEvent.click(screen.getByText('2'));
        expect(handlePageChange).toHaveBeenCalledWith(2);
    });

    test('handles edge cases for first and last pages correctly', () => {
        const handlePageChange = jest.fn();
        
        // First page
        render(<Pagination currentPage={1} totalPages={20} onPageChange={handlePageChange} />);
        
        const firstButton = screen.getByRole('button', { name: /double left/i });
        const prevButton = screen.getByRole('button', { name: /left/i });

        expect(firstButton).toBeDisabled();
        expect(prevButton).toBeDisabled();
        
        // Last page
        render(<Pagination currentPage={20} totalPages={20} onPageChange={handlePageChange} />);
        
        const nextButton = screen.getByRole('button', { name: /right/i });
        const lastButton = screen.getByRole('button', { name: /double right/i });

        expect(nextButton).toBeDisabled();
        expect(lastButton).toBeDisabled();
    });

    test('handles ellipsis for pages correctly', () => {
        render(<Pagination currentPage={15} totalPages={20} onPageChange={jest.fn()} />);

        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('...')).toBeInTheDocument();
        expect(screen.getByText('11')).toBeInTheDocument();
        expect(screen.getByText('12')).toBeInTheDocument();
        expect(screen.getByText('13')).toBeInTheDocument();
        expect(screen.getByText('14')).toBeInTheDocument();
        expect(screen.getByText('15')).toBeInTheDocument();
        expect(screen.getByText('16')).toBeInTheDocument();
        expect(screen.getByText('17')).toBeInTheDocument();
        expect(screen.getByText('18')).toBeInTheDocument();
        expect(screen.getByText('19')).toBeInTheDocument();
        expect(screen.getByText('20')).toBeInTheDocument();
    });

    test('calls onPageChange correctly for navigation buttons', () => {
        const handlePageChange = jest.fn();
        render(<Pagination currentPage={10} totalPages={20} onPageChange={handlePageChange} />);

        fireEvent.click(screen.getByRole('button', { name: /left/i }));
        expect(handlePageChange).toHaveBeenCalledWith(9);

        fireEvent.click(screen.getByRole('button', { name: /right/i }));
        expect(handlePageChange).toHaveBeenCalledWith(11);

        fireEvent.click(screen.getByRole('button', { name: /double left/i }));
        expect(handlePageChange).toHaveBeenCalledWith(1);

        fireEvent.click(screen.getByRole('button', { name: /double right/i }));
        expect(handlePageChange).toHaveBeenCalledWith(20);
    });
});
