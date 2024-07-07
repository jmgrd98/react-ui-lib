import { render, screen, fireEvent } from '@testing-library/react';
import Stepper from './Stepper'; // Update the import path as needed

describe('Stepper', () => {
    test('renders correctly with the provided value', () => {
        render(<Stepper value={10} />);

        const input = screen.getByRole('spinbutton');
        expect(input).toHaveValue(10);
    });

    test('increments the value correctly', () => {
        render(<Stepper value={10} />);

        const incrementButton = screen.getByText('+');
        fireEvent.click(incrementButton);

        const input = screen.getByRole('spinbutton');
        expect(input).toHaveValue(11);
    });

    test('decrements the value correctly', () => {
        render(<Stepper value={10} />);

        const decrementButton = screen.getByText('-');
        fireEvent.click(decrementButton);

        const input = screen.getByRole('spinbutton');
        expect(input).toHaveValue(9);
    });

    test('does not go below the minimum value', () => {
        render(<Stepper value={0} min={0} />);

        const decrementButton = screen.getByText('-');
        fireEvent.click(decrementButton);

        const input = screen.getByRole('spinbutton');
        expect(input).toHaveValue(0);
    });

    test('does not go above the maximum value', () => {
        render(<Stepper value={100} max={100} />);

        const incrementButton = screen.getByText('+');
        fireEvent.click(incrementButton);

        const input = screen.getByRole('spinbutton');
        expect(input).toHaveValue(100);
    });

    test('calls the onChange callback correctly', () => {
        const handleChange = jest.fn();
        render(<Stepper value={10} onChange={handleChange} />);

        const incrementButton = screen.getByText('+');
        fireEvent.click(incrementButton);

        expect(handleChange).toHaveBeenCalledWith(11);

        const decrementButton = screen.getByText('-');
        fireEvent.click(decrementButton);

        expect(handleChange).toHaveBeenCalledWith(10);
    });

    test('handles input change correctly', () => {
        render(<Stepper value={10} />);

        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: '15' } });

        expect(input).toHaveValue(15);
    });

    test('applies the passed className', () => {
        render(<Stepper value={10} className="custom-class" />);

        const container = screen.getByRole('spinbutton').parentElement;
        expect(container).toHaveClass('custom-class');
    });
});
