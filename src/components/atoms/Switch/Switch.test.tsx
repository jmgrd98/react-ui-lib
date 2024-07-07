import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch, { SwitchProps } from './Switch';

describe('Switch Component', () => {
    const renderSwitch = (props: Partial<SwitchProps> = {}) => {
        const defaultProps: SwitchProps = {
            checked: false,
            onChange: jest.fn(),
            className: '',
            ...props,
        };
        return render(<Switch {...defaultProps} />);
    };

    test('renders the switch component', () => {
        const { getByRole } = renderSwitch();
        const switchInput = getByRole('checkbox');
        expect(switchInput).toBeInTheDocument();
    });

    test('sets the correct default checked state', () => {
        const { getByRole } = renderSwitch({ checked: true });
        const switchInput = getByRole('checkbox') as HTMLInputElement;
        expect(switchInput.checked).toBe(true);
    });

    test('handles value changes', () => {
        const handleChange = jest.fn();
        const { getByRole } = renderSwitch({ checked: false, onChange: handleChange });
        const switchInput = getByRole('checkbox') as HTMLInputElement;

        fireEvent.click(switchInput);
        expect(handleChange).toHaveBeenCalledWith(true);
    });

    test('applies additional class names', () => {
        const { container } = renderSwitch({ className: 'custom-class' });
        const label = container.querySelector('label');
        expect(label).toHaveClass('custom-class');
    });
});
