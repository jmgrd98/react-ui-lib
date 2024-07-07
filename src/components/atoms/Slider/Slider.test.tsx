import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Slider, { SliderProps } from './Slider';

describe('Slider Component', () => {
    const renderSlider = (props: Partial<SliderProps> = {}) => {
        const defaultProps: SliderProps = {
            value: 50,
            min: 0,
            max: 100,
            step: 1,
            onChange: jest.fn(),
            ...props,
        };
        return render(<Slider {...defaultProps} />);
    };

    test('renders the slider component', () => {
        const { getByRole } = renderSlider();
        const slider = getByRole('slider');
        expect(slider).toBeInTheDocument();
    });

    test('sets the correct default value', () => {
        const { getByRole } = renderSlider({ value: 25 });
        const slider = getByRole('slider') as HTMLInputElement;
        expect(slider.value).toBe('25');
    });

    test('handles value changes', () => {
        const handleChange = jest.fn();
        const { getByRole } = renderSlider({ value: 25, onChange: handleChange });
        const slider = getByRole('slider') as HTMLInputElement;

        fireEvent.change(slider, { target: { value: '30' } });
        expect(handleChange).toHaveBeenCalledWith(30);
    });

    test('applies the correct min, max, and step values', () => {
        const { getByRole } = renderSlider({ min: 10, max: 90, step: 5 });
        const slider = getByRole('slider') as HTMLInputElement;
        expect(slider.min).toBe('10');
        expect(slider.max).toBe('90');
        expect(slider.step).toBe('5');
    });

    test('applies additional class names', () => {
        const { getByRole } = renderSlider({ className: 'custom-class' });
        const slider = getByRole('slider');
        expect(slider).toHaveClass('slider custom-class');
    });

    test('handles value as an array', () => {
        const { getByRole } = renderSlider({ value: [30, 70] });
        const slider = getByRole('slider') as HTMLInputElement;
        expect(slider.value).toBe('30');
    });
});
