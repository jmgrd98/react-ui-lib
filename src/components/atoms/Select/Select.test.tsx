import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from './Select';

describe('Select', () => {
    const options = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
    ];

    it('renders the select component with placeholder', () => {
        render(<Select options={options} placeholder="Select" />);
        expect(screen.getByText('Select')).toBeInTheDocument();
    });

    it('toggles the dropdown on click', () => {
        render(<Select options={options} placeholder="Select" />);
        const selectElement = screen.getByText('Select');
        
        fireEvent.click(selectElement);
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        
        fireEvent.click(selectElement);
        expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    });

    it('filters options based on search term', () => {
        render(<Select options={options} placeholder="Select" search />);
        const selectElement = screen.getByText('Select');
        
        fireEvent.click(selectElement);

        const searchInput = screen.getByPlaceholderText('Search...');
        fireEvent.change(searchInput, { target: { value: '2' } });
        
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
    });

    it('selects and closes dropdown', () => {
        const handleChange = jest.fn();
        render(<Select options={options} placeholder="Select" onChange={handleChange} />);
        const selectElement = screen.getByText('Select');
        
        fireEvent.click(selectElement);

        const optionElement = screen.getByText('Option 2');
        fireEvent.click(optionElement);
        
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        expect(screen.queryByText('Option 1')).not.toBeInTheDocument();

        expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({ target: expect.objectContaining({ value: '2' }) }));
    });

    it('handles disabled state', () => {
        render(<Select options={options} placeholder="Select" disabled />);
        const selectElement = screen.getByText('Select');

        fireEvent.click(selectElement);
        expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    });

    it('handles error state', () => {
        render(<Select options={options} placeholder="Select" error />);
        const selectElement = screen.getByText('Select');

        expect(selectElement.parentElement).toHaveClass('border-red-600');
    });

    it('closes dropdown on outside click', () => {
        render(<Select options={options} placeholder="Select" />);
        const selectElement = screen.getByText('Select');
        
        fireEvent.click(selectElement);
        expect(screen.getByText('Option 1')).toBeInTheDocument();

        fireEvent.mouseDown(document);
        expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    });
});
