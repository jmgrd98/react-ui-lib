import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Avatar from './Avatar';
import '@testing-library/jest-dom';

describe('Avatar', () => {
    it('renders the image successfully', () => {
        render(<Avatar src="image.jpg" alt="avatar image" />);
        const image = screen.getByAltText('avatar image');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'image.jpg');
    });

    it('renders the fallback when the image fails to load', () => {
        render(<Avatar src="invalid-image.jpg" alt="avatar image" fallback="Fallback Text" />);
        const image = screen.getByAltText('avatar image');
        
        // Trigger image error
        fireEvent.error(image);

        const fallback = screen.getByText('Fallback Text');
        expect(fallback).toBeInTheDocument();
    });

    it('renders default fallback text when no fallback prop is provided', () => {
        render(<Avatar src="invalid-image.jpg" alt="avatar image" />);
        const image = screen.getByAltText('avatar image');

        // Trigger image error
        fireEvent.error(image);

        const fallback = screen.getByText('Avatar');
        expect(fallback).toBeInTheDocument();
    });

    it('applies the provided className', () => {
        render(<Avatar src="image.jpg" alt="avatar image" className="custom-class" />);
        const container = screen.getByAltText('avatar image').parentElement;
        expect(container).toHaveClass('custom-class');
    });
});
