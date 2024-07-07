import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Badge from './Badge';
import '@testing-library/jest-dom';

describe('Badge', () => {
    it('renders the badge with the correct children', () => {
        render(<Badge>Badge Content</Badge>);

        const badge = screen.getByText('Badge Content');
        expect(badge).toBeInTheDocument();
    });

    it('applies the correct styles for the solid variant', () => {
        render(<Badge variant="solid" color="#007BFF">Badge Content</Badge>);

        const badge = screen.getByText('Badge Content');
        expect(badge).toHaveStyle('background-color: #007BFF');
        expect(badge).toHaveStyle('color: white');
    });

    it('applies the correct styles for the outline variant', () => {
        render(<Badge variant="outline" color="#007BFF">Badge Content</Badge>);

        const badge = screen.getByText('Badge Content');
        expect(badge).toHaveStyle('border-color: #007BFF');
        expect(badge).toHaveStyle('color: #007BFF');
    });

    it('renders the close button when withClose is true', () => {
        render(<Badge withClose>Badge Content</Badge>);

        const closeButton = screen.getByRole('button');
        expect(closeButton).toBeInTheDocument();
    });

    it('calls onClose when the close button is clicked', () => {
        const handleClose = jest.fn();
        render(<Badge withClose onClose={handleClose}>Badge Content</Badge>);

        const closeButton = screen.getByRole('button');
        fireEvent.click(closeButton);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('applies the correct size styles', () => {
        render(<Badge size="lg">Badge Content</Badge>);

        const badge = screen.getByText('Badge Content');
        expect(badge).toHaveClass('text-lg');
    });
});
