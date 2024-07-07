import React from 'react';
import { render } from '@testing-library/react';
import { Text } from './Text';
import '@testing-library/jest-dom';

describe('Text Component', () => {
    test('renders with default props', () => {
        const { container } = render(<Text>Default Text</Text>);
        const span = container.querySelector('span');
        expect(span).toHaveClass('w-full');
        expect(span).toHaveTextContent('Default Text');
    });

    test('renders with custom element', () => {
        const { container } = render(<Text as="p">Paragraph Text</Text>);
        const p = container.querySelector('p');
        expect(p).toHaveClass('w-full');
        expect(p).toHaveTextContent('Paragraph Text');
    });

    test('applies emphasis variant', () => {
        const { container } = render(<Text emphasis="low">Emphasized Text</Text>);
        const span = container.querySelector('span');
        expect(span).toHaveClass('text-gray-600 font-light');
    });

    test('applies size variant', () => {
        const { container } = render(<Text size="lg">Large Text</Text>);
        const span = container.querySelector('span');
        expect(span).toHaveClass('text-lg');
    });

    test('applies weight variant', () => {
        const { container } = render(<Text weight="bold">Bold Text</Text>);
        const span = container.querySelector('span');
        expect(span).toHaveClass('font-bold');
    });

    test('applies align variant', () => {
        const { container } = render(<Text align="center">Centered Text</Text>);
        const span = container.querySelector('span');
        expect(span).toHaveClass('text-center');
    });

    test('applies italic variant', () => {
        const { container } = render(<Text italic>Italic Text</Text>);
        const span = container.querySelector('span');
        expect(span).toHaveClass('italic');
    });

    test('applies underline variant', () => {
        const { container } = render(<Text underline>Underlined Text</Text>);
        const span = container.querySelector('span');
        expect(span).toHaveClass('underline underline-offset-2');
    });

    test('applies multiple variants', () => {
        const { container } = render(<Text size="2xl" weight="black" align="right" italic underline>Styled Text</Text>);
        const span = container.querySelector('span');
        expect(span).toHaveClass('text-2xl font-black text-right italic underline underline-offset-2');
    });

    test('applies additional class names', () => {
        const { container } = render(<Text className="custom-class">Custom Class Text</Text>);
        const span = container.querySelector('span');
        expect(span).toHaveClass('custom-class');
    });
});
