import { render, screen } from '@testing-library/react';
import { Box } from './Box';
import '@testing-library/jest-dom/extend-expect';
import { useRef, forwardRef } from 'react';

describe('Box', () => {
    test('renders Box component with children', () => {
        render(<Box>Test Content</Box>);
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    test('applies custom className', () => {
        const customClassName = 'custom-class';
        const { container } = render(<Box className={customClassName}>Test Content</Box>);
        const box = container.firstChild;
        expect(box).toHaveClass('custom-class');
    });

    test('forwards ref to the div element', () => {
        const ref = useRef<HTMLDivElement>(null);
        render(<Box ref={ref}>Test Content</Box>);
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
