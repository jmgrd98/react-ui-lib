import React from 'react';
import { render } from '@testing-library/react';
import Spinner, { SpinnerProps } from './Spinner';
import '@testing-library/jest-dom';

describe('Spinner Component', () => {
    const renderSpinner = (props: Partial<SpinnerProps> = {}) => {
        const defaultProps: SpinnerProps = {
            className: '',
            ...props,
        };
        return render(<Spinner {...defaultProps} />);
    };

    test('renders the spinner component', () => {
        const { getByTestId } = renderSpinner();
        const spinner = getByTestId('spinner');
        expect(spinner).toBeInTheDocument();
    });

    test('applies the default classes', () => {
        const { getByTestId } = renderSpinner();
        const spinner = getByTestId('spinner');
        expect(spinner).toHaveClass('border-4 border-solid border-blue-500 border-t-transparent rounded-full animate-spin');
    });

    test('applies additional class names', () => {
        const { getByTestId } = renderSpinner({ className: 'custom-class' });
        const spinner = getByTestId('spinner');
        expect(spinner).toHaveClass('border-4 border-solid border-blue-500 border-t-transparent rounded-full animate-spin custom-class');
    });
});
