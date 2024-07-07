import { render, screen } from '@testing-library/react';
import Card from './Card';
import '@testing-library/jest-dom/extend-expect';

describe('Card', () => {
    test('renders Card component with children', () => {
        render(<Card>Test Content</Card>);
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    test('applies custom width and height styles', () => {
        const { container } = render(<Card width={200} height={300}>Test Content</Card>);
        const card = container.firstChild;
        expect(card).toHaveStyle('width: 200px');
        expect(card).toHaveStyle('height: 300px');
    });

    test('applies custom className', () => {
        const customClassName = 'custom-class';
        const { container } = render(<Card className={customClassName}>Test Content</Card>);
        const card = container.firstChild;
        expect(card).toHaveClass('custom-class');
    });

    test('applies default styles', () => {
        const { container } = render(<Card>Test Content</Card>);
        const card = container.firstChild;
        expect(card).toHaveClass('w-full');
        expect(card).toHaveClass('rounded-lg');
        expect(card).toHaveClass('shadow-lg');
        expect(card).toHaveClass('bg-white');
        expect(card).toHaveClass('p-5');
        expect(card).toHaveClass('flex');
        expect(card).toHaveClass('flex-col');
        expect(card).toHaveClass('justify-evenly');
    });
});
