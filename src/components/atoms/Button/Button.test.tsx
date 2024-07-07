import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
    it('renders the button with the correct label', () => {
        render(<Button label="Button" />);

        const button = screen.getByText('Button');
        expect(button).toBeInTheDocument();
    });

    it('applies the correct styles for the solid variant', () => {
        render(<Button label="Button" variant="solid" backgroundColor="#007BFF" />);

        const button = screen.getByText('Button');
        expect(button).toHaveStyle('background-color: #007BFF');
    });

    it('applies the correct styles for the outline variant', () => {
        render(<Button label="Button" variant="outline" backgroundColor="#007BFF" />);

        const button = screen.getByText('Button');
        expect(button).toHaveStyle('border-color: #007BFF');
        expect(button).toHaveStyle('color: #007BFF');
    });

    it('applies the correct styles for the ghost variant', () => {
        render(<Button label="Button" variant="ghost" backgroundColor="#007BFF" />);

        const button = screen.getByText('Button');
        expect(button).toHaveStyle('color: #007BFF');
        expect(button).toHaveStyle('background-color: transparent');
    });

    it('applies hover styles correctly', () => {
        render(<Button label="Button" backgroundColor="#007BFF" hoverColor="#0056b3" />);

        const button = screen.getByText('Button');
        fireEvent.mouseEnter(button);
        expect(button).toHaveStyle('background-color: #0056b3');

        fireEvent.mouseLeave(button);
        expect(button).toHaveStyle('background-color: rgb(0, 86, 179)');
    });

    it('applies active styles correctly', () => {
        render(<Button label="Button" backgroundColor="#007BFF" activeColor="#003f7f" />);

        const button = screen.getByText('Button');
        fireEvent.mouseDown(button);
        expect(button).toHaveStyle('background-color: #003f7f');

        fireEvent.mouseUp(button);
        expect(button).toHaveStyle('background-color: rgb(0, 63, 127)');
    });

    it('handles click events', () => {
        const handleClick = jest.fn();
        render(<Button label="Button" onClick={handleClick} />);

        const button = screen.getByText('Button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies the correct size styles', () => {
        render(<Button label="Button" size="lg" />);

        const button = screen.getByText('Button');
        expect(button).toHaveClass('px-6 py-3 text-lg');
    });

    it('disables the button correctly', () => {
        render(<Button label="Button" disabled />);

        const button = screen.getByText('Button');
        expect(button).toBeDisabled();
    });
});
