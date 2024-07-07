import { render, screen, fireEvent } from '@testing-library/react';
import Tooltip from './Tooltip'; // Update the import path as needed

describe('Tooltip', () => {
    test('tooltip content is not visible by default', () => {
        render(
            <Tooltip content="Tooltip Content">
                <button>Hover me</button>
            </Tooltip>
        );

        expect(screen.queryByText('Tooltip Content')).not.toBeInTheDocument();
    });

    test('tooltip content becomes visible on mouse enter', () => {
        render(
            <Tooltip content="Tooltip Content">
                <button>Hover me</button>
            </Tooltip>
        );

        fireEvent.mouseEnter(screen.getByText('Hover me'));

        expect(screen.getByText('Tooltip Content')).toBeVisible();
    });

    test('tooltip content hides on mouse leave', () => {
        render(
            <Tooltip content="Tooltip Content">
                <button>Hover me</button>
            </Tooltip>
        );

        const button = screen.getByText('Hover me');

        fireEvent.mouseEnter(button);
        fireEvent.mouseLeave(button);

        expect(screen.queryByText('Tooltip Content')).not.toBeInTheDocument();
    });

    test('tooltip appears in the correct position', () => {
        const positions = ['top', 'right', 'bottom', 'left'];

        positions.forEach((position: any) => {
            render(
                <Tooltip content="Tooltip Content" position={position}>
                    <button>Hover me</button>
                </Tooltip>
            );

            fireEvent.mouseEnter(screen.getByText('Hover me'));

            const tooltip = screen.getByText('Tooltip Content');

            if (position === 'top') {
                expect(tooltip).toHaveClass('bottom-full');
                expect(tooltip).toHaveClass('left-1/2');
                expect(tooltip).toHaveClass('transform');
                expect(tooltip).toHaveClass('-translate-x-1/2');
                expect(tooltip).toHaveClass('mb-2');
            } else if (position === 'right') {
                expect(tooltip).toHaveClass('left-full');
                expect(tooltip).toHaveClass('top-1/2');
                expect(tooltip).toHaveClass('transform');
                expect(tooltip).toHaveClass('-translate-y-1/2');
                expect(tooltip).toHaveClass('ml-2');
            } else if (position === 'bottom') {
                expect(tooltip).toHaveClass('top-full');
                expect(tooltip).toHaveClass('left-1/2');
                expect(tooltip).toHaveClass('transform');
                expect(tooltip).toHaveClass('-translate-x-1/2');
                expect(tooltip).toHaveClass('mt-2');
            } else if (position === 'left') {
                expect(tooltip).toHaveClass('right-full');
                expect(tooltip).toHaveClass('top-1/2');
                expect(tooltip).toHaveClass('transform');
                expect(tooltip).toHaveClass('-translate-y-1/2');
                expect(tooltip).toHaveClass('mr-2');
            }

            fireEvent.mouseLeave(screen.getByText('Hover me'));
        });
    });
});
