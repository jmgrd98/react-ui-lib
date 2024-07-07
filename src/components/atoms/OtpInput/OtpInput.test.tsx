import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OtpInput from './OtpInput';

describe('OtpInput', () => {
    it('renders the correct number of input fields', () => {
        render(<OtpInput length={4} onComplete={() => {}} />);
        const inputs = screen.getAllByRole('textbox');
        expect(inputs).toHaveLength(4);
    });

    it('focuses the first input on initial render', () => {
        render(<OtpInput length={4} onComplete={() => {}} />);
        const firstInput = screen.getAllByRole('textbox')[0];
        expect(firstInput).toHaveFocus();
    });

    it('moves to the next input on entering a digit', () => {
        render(<OtpInput length={4} onComplete={() => {}} />);
        const inputs = screen.getAllByRole('textbox');
        fireEvent.change(inputs[0], { target: { value: '1' } });
        expect(inputs[1]).toHaveFocus();
    });

    it('moves to the previous input on backspace if the current input is empty', () => {
        render(<OtpInput length={4} onComplete={() => {}} />);
        const inputs = screen.getAllByRole('textbox');
        fireEvent.change(inputs[0], { target: { value: '1' } });
        fireEvent.change(inputs[1], { target: { value: '' } });
        fireEvent.keyDown(inputs[1], { key: 'Backspace' });
        expect(inputs[0]).toHaveFocus();
    });

    it('does not move to the next input on entering a non-digit character', () => {
        render(<OtpInput length={4} onComplete={() => {}} />);
        const inputs = screen.getAllByRole('textbox');
        fireEvent.change(inputs[0], { target: { value: 'a' } });
        expect(inputs[0]).toHaveFocus();
        expect(inputs[0]).toHaveValue('');
    });

    it('calls onComplete when all inputs are filled', () => {
        const handleComplete = jest.fn();
        render(<OtpInput length={4} onComplete={handleComplete} />);
        const inputs = screen.getAllByRole('textbox');
        fireEvent.change(inputs[0], { target: { value: '1' } });
        fireEvent.change(inputs[1], { target: { value: '2' } });
        fireEvent.change(inputs[2], { target: { value: '3' } });
        fireEvent.change(inputs[3], { target: { value: '4' } });
        expect(handleComplete).toHaveBeenCalledWith('1234');
    });

    it('applies custom className to the container', () => {
        const { container } = render(<OtpInput length={4} onComplete={() => {}} className="custom-class" />);
        expect(container.firstChild).toHaveClass('custom-class');
    });

    it('restricts input length to 1 character', () => {
        render(<OtpInput length={4} onComplete={() => {}} />);
        const inputs = screen.getAllByRole('textbox');
        fireEvent.change(inputs[0], { target: { value: '1' } });
        expect(inputs[0]).toHaveValue('1');
    });
});
