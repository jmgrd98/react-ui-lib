import { render, screen } from '@testing-library/react';
import Flex, { FlexProps } from './Flex';
import '@testing-library/jest-dom/extend-expect';

describe('Flex', () => {
    test('renders Flex component with children', () => {
        render(<Flex>Test Content</Flex>);
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    test('applies default class names', () => {
        const { container } = render(<Flex>Test Content</Flex>);
        const flexElement = container.firstChild;
        expect(flexElement).toHaveClass('flex', 'flex-row', 'justify-start', 'items-start', 'flex-nowrap');
    });

    test('applies custom className', () => {
        const customClassName = 'custom-class';
        const { container } = render(<Flex className={customClassName}>Test Content</Flex>);
        const flexElement = container.firstChild;
        expect(flexElement).toHaveClass('custom-class');
    });

    test('applies class names based on props', () => {
        const props: FlexProps = {
            direction: 'col-reverse',
            justify: 'between',
            align: 'center',
            wrap: 'wrap',
        };
        const { container } = render(<Flex {...props}>Test Content</Flex>);
        const flexElement = container.firstChild;
        expect(flexElement).toHaveClass(
            'flex',
            'flex-col-reverse',
            'justify-between',
            'items-center',
            'flex-wrap'
        );
    });
});
