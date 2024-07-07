import { render, screen } from '@testing-library/react';
import { Textarea } from './Textarea'; // Update the import path as needed

describe('Textarea', () => {
    test('renders correctly with default styles', () => {
        render(<Textarea placeholder="Enter text" />);

        const textarea = screen.getByPlaceholderText('Enter text');
        expect(textarea).toBeInTheDocument();
        expect(textarea).toHaveClass(
            'w-full',
            'border',
            'border-gray-200',
            'p-2',
            'rounded-lg',
            'transition-all',
            'duration-100',
            'outlin-none',
            'focus:outline-primary-500',
            'focus:border-transparent',
            'placeholder:text-gray-400',
            'placeholder:text-sm'
        );
    });

    test('renders with a label if provided', () => {
        render(<Textarea label="Username" placeholder="Enter text" />);

        const label = screen.getByText('Username');
        expect(label).toBeInTheDocument();
        expect(label.tagName).toBe('LABEL');
        expect(label).toHaveClass('mb-1.5');

        const textarea = screen.getByPlaceholderText('Enter text');
        expect(textarea).toBeInTheDocument();
    });

    test('applies the passed className', () => {
        render(<Textarea className="custom-class" placeholder="Enter text" />);

        const textarea = screen.getByPlaceholderText('Enter text');
        expect(textarea).toBeInTheDocument();
        expect(textarea).toHaveClass('custom-class');
    });

    test('can be disabled', () => {
        render(<Textarea disabled placeholder="Enter text" />);

        const textarea = screen.getByPlaceholderText('Enter text');
        expect(textarea).toBeInTheDocument();
        expect(textarea).toBeDisabled();
    });
});
