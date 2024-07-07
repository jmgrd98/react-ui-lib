import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';
import '@testing-library/jest-dom';

describe('Checkbox', () => {
    it('renders with default props', () => {
        render(<Checkbox>Label</Checkbox>);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
    });

    it('renders with custom size and shape', () => {
        render(<Checkbox size="lg" shape="round">Label</Checkbox>);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveClass('w-6 h-6 rounded-full');
    });

    it('applies custom className', () => {
        render(<Checkbox className="custom-class">Label</Checkbox>);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveClass('custom-class');
    });

    it('applies checked color when specified', () => {
        render(<Checkbox checkedColor="red">Label</Checkbox>);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveStyle('--checked-color: red');
    });

    it('calls onChange handler when clicked', () => {
        const handleChange = jest.fn();
        render(<Checkbox onChange={handleChange}>Label</Checkbox>);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalled();
    });

    it('renders children as label', () => {
        render(<Checkbox>Checkbox Label</Checkbox>);
        const label = screen.getByText('Checkbox Label');
        expect(label).toBeInTheDocument();
    });

    it('renders with correct size class for label', () => {
        render(<Checkbox size="sm">Small Label</Checkbox>);
        const label = screen.getByText('Small Label');
        expect(label).toHaveClass('ml-2 text-sm');
    });
});
