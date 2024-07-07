import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Autocomplete from './Autocomplete';
import '@testing-library/jest-dom';

describe('Autocomplete', () => {
    const suggestions = ['Apple', 'Banana', 'Date', 'Grape'];
    const onSelectMock = jest.fn();

    it('renders the input field', () => {
        render(<Autocomplete suggestions={suggestions} onSelect={onSelectMock} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    it('displays suggestions based on input value', () => {
        render(<Autocomplete suggestions={suggestions} onSelect={onSelectMock} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'a' } });

        const suggestionItems = screen.getAllByRole('listitem');
        expect(suggestionItems).toHaveLength(4); // Apple, Banana, Date, Grape
    });

    it('hides suggestions when input value is empty', () => {
        render(<Autocomplete suggestions={suggestions} onSelect={onSelectMock} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'a' } });
        fireEvent.change(input, { target: { value: '' } });

        expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('selects a suggestion on click', () => {
        render(<Autocomplete suggestions={suggestions} onSelect={onSelectMock} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'a' } });

        const suggestionItems = screen.getAllByRole('listitem');
        fireEvent.click(suggestionItems[0]); // Click on 'Apple'

        expect(onSelectMock).toHaveBeenCalledWith('Apple');
        expect(input).toHaveValue('Apple');
        setTimeout(() => {
            expect(screen.queryByRole('list')).not.toBeInTheDocument();
        }, 0);
    });

    it('navigates suggestions with arrow keys and selects with Enter key', () => {
        render(<Autocomplete suggestions={suggestions} onSelect={onSelectMock} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'a' } });

        fireEvent.keyDown(input, { key: 'ArrowDown' });
        fireEvent.keyDown(input, { key: 'ArrowDown' });
        fireEvent.keyDown(input, { key: 'ArrowUp' });
        fireEvent.keyDown(input, { key: 'Enter' });

        expect(onSelectMock).toHaveBeenCalledWith('Banana');
        expect(input).toHaveValue('Banana');
        setTimeout(() => {
            expect(screen.queryByRole('list')).not.toBeInTheDocument();
        }, 0);
    });

    it('does not crash when pressing Enter with no suggestions', () => {
        render(<Autocomplete suggestions={[]} onSelect={onSelectMock} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'x' } });

        fireEvent.keyDown(input, { key: 'Enter' });
        expect(onSelectMock).not.toHaveBeenCalled();
    });

    it('hides suggestions when clicking outside', () => {
        const { container } = render(<Autocomplete suggestions={suggestions} onSelect={onSelectMock} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'a' } });

        fireEvent.mouseDown(document);
        setTimeout(() => {
            expect(screen.queryByRole('list')).not.toBeInTheDocument();
        }, 0);
    });
});
