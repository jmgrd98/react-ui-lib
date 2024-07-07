import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Alert from './Alert';
import { FaExclamationCircle } from 'react-icons/fa';

describe('Alert', () => {
    it('renders the alert component with children', () => {
        render(<Alert>Test Alert</Alert>);
        expect(screen.getByText('Test Alert')).toBeInTheDocument();
    });

    it('applies width and height styles when provided', () => {
        render(<Alert width={300} height={200}>Styled Alert</Alert>);
        const alertElement = screen.getByText('Styled Alert').closest('div');
        expect(alertElement).toHaveStyle('width: 300px');
        expect(alertElement).toHaveStyle('height: 200px');
    });

    it('renders with an icon when the icon prop is provided', () => {
        render(<Alert icon={<FaExclamationCircle />}>Alert with Icon</Alert>);
        expect(screen.getByText('Alert with Icon')).toBeInTheDocument();
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('applies additional class names from className prop', () => {
        render(<Alert className="additional-class">Classy Alert</Alert>);
        const alertElement = screen.getByText('Classy Alert').closest('div');
        expect(alertElement).toHaveClass('additional-class');
    });

    it('handles custom inline styles', () => {
        render(<Alert style={{ backgroundColor: 'red' }}>Styled Alert</Alert>);
        const alertElement = screen.getByText('Styled Alert').closest('div');
        expect(alertElement).toHaveStyle('background-color: red');
    });
});
