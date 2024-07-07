import { render, screen } from '@testing-library/react';
import Grid from './Grid';
import '@testing-library/jest-dom/extend-expect';

describe('Grid', () => {
    test('renders Grid component with children', () => {
        render(<Grid>Test Content</Grid>);
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    test('applies default class names', () => {
        const { container } = render(<Grid>Test Content</Grid>);
        const gridElement = container.firstChild;
        expect(gridElement).toHaveClass('grid', 'grid-cols-auto', 'gap-4');
    });

    test('applies custom className', () => {
        const customClassName = 'custom-class';
        const { container } = render(<Grid className={customClassName}>Test Content</Grid>);
        const gridElement = container.firstChild;
        expect(gridElement).toHaveClass('custom-class');
    });

    test('applies class names based on props', () => {
        const props = {
            cols: '3',
            gap: '2',
        };
        const { container } = render(<Grid {...props}>Test Content</Grid>);
        const gridElement = container.firstChild;
        expect(gridElement).toHaveClass(
            'grid',
            'grid-cols-3',
            'gap-2'
        );
    });
});
