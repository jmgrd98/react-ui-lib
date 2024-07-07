import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Progress from './Progress';

describe('Progress', () => {
    it('renders the progress bar', () => {
        render(<Progress value={50} max={100} />);
        const outerDiv = screen.getByTestId('progress-bar-outer');
        expect(outerDiv).toBeInTheDocument();
    });

    it('calculates and sets the correct width', () => {
        const { rerender } = render(<Progress value={25} max={100} />);
        let innerDiv = screen.getByTestId('progress-bar-inner');
        expect(innerDiv).toHaveStyle({ width: '25%' });

        rerender(<Progress value={50} max={100} />);
        innerDiv = screen.getByTestId('progress-bar-inner');
        expect(innerDiv).toHaveStyle({ width: '50%' });

        rerender(<Progress value={75} max={100} />);
        innerDiv = screen.getByTestId('progress-bar-inner');
        expect(innerDiv).toHaveStyle({ width: '75%' });

        rerender(<Progress value={100} max={100} />);
        innerDiv = screen.getByTestId('progress-bar-inner');
        expect(innerDiv).toHaveStyle({ width: '100%' });
    });

    it('applies custom className', () => {
        const { container } = render(<Progress value={50} max={100} className="custom-class" />);
        expect(container.firstChild).toHaveClass('custom-class');
    });

    it('handles zero max value gracefully', () => {
        render(<Progress value={50} max={0} />);
        const innerDiv = screen.getByTestId('progress-bar-inner');
        expect(innerDiv).toHaveStyle({ width: '0%' });
    });

    it('handles value greater than max gracefully', () => {
        render(<Progress value={150} max={100} />);
        const innerDiv = screen.getByTestId('progress-bar-inner');
        expect(innerDiv).toHaveStyle({ width: '100%' });
    });

    it('handles value less than zero gracefully', () => {
        render(<Progress value={-50} max={100} />);
        const innerDiv = screen.getByTestId('progress-bar-inner');
        expect(innerDiv).toHaveStyle({ width: '0%' });
    });
});
