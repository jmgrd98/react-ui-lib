import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

describe('Input', () => {
    it('renders an input with default type text', () => {
        render(<Input placeholder="Enter text" />);
        const input = screen.getByPlaceholderText('Enter text');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text');
    });

    it('renders with a label when provided', () => {
        render(<Input label="Username" placeholder="Enter username" />);
        const label = screen.getByText('Username');
        expect(label).toBeInTheDocument();
    });

    it('handles input changes for CPF type', () => {
        render(<Input type="cpf" />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: '12345678901' } });
        expect(input).toHaveValue('123.456.789-01');
    });

    it('handles input changes for CNPJ type', () => {
        render(<Input type="cnpj" />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: '12345678000195' } });
        expect(input).toHaveValue('12.345.678/0001-95');
    });

    it('handles input changes for PIN type', () => {
        render(<Input type="pin" />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: '12345' } });
        expect(input).toHaveValue('1234');
    });

    it('toggles password visibility', () => {
        render(<Input type="password" placeholder="Enter password" />);
        const input = screen.getByPlaceholderText('Enter password') as HTMLInputElement;
        const button = screen.getByRole('button');
        
        // Initially password type should be password
        expect(input.type).toBe('password');
        
        // Click button to show password
        fireEvent.click(button);
        expect(input.type).toBe('text');
        
        // Click button to hide password
        fireEvent.click(button);
        expect(input.type).toBe('password');
    });

    it('applies custom className', () => {
        render(<Input className="custom-class" />);
        const input = screen.getByRole('textbox');
        expect(input).toHaveClass('custom-class');
    });

    it('renders placeholder correctly', () => {
        render(<Input placeholder="Enter your text" />);
        const input = screen.getByPlaceholderText('Enter your text');
        expect(input).toBeInTheDocument();
    });

    it('calls onChange handler when text is entered', () => {
        const handleChange = jest.fn();
        render(<Input onChange={handleChange} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(handleChange).toHaveBeenCalled();
    });

    it('handles number input correctly', () => {
        render(<Input type="number" />);
        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: '123' } });
        expect(input).toHaveValue(123);
    });
});
