import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal'; // Update the import path as needed
import { IoClose } from 'react-icons/io5';

describe('Modal', () => {
    test('renders correctly when isOpen is true', () => {
        render(
            <Modal isOpen={true} onClose={jest.fn()}>
                <div>Modal Content</div>
            </Modal>
        );

        expect(screen.getByText('Modal Content')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('does not render when isOpen is false', () => {
        render(
            <Modal isOpen={false} onClose={jest.fn()}>
                <div>Modal Content</div>
            </Modal>
        );

        expect(screen.queryByText('Modal Content')).toBeNull();
    });

    test('calls onClose callback when the close button is clicked', () => {
        const handleClose = jest.fn();
        render(
            <Modal isOpen={true} onClose={handleClose}>
                <div>Modal Content</div>
            </Modal>
        );

        fireEvent.click(screen.getByRole('button'));
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    test('applies width and height styles correctly', () => {
        render(
            <Modal isOpen={true} onClose={jest.fn()} width={300} height={400}>
                <div>Modal Content</div>
            </Modal>
        );

        const cardElement = screen.getByText('Modal Content').parentElement;

        expect(cardElement).toHaveStyle({ width: '300px', height: '400px' });
    });

    test('applies string width and height styles correctly', () => {
        render(
            <Modal isOpen={true} onClose={jest.fn()} width="50%" height="75%">
                <div>Modal Content</div>
            </Modal>
        );

        const cardElement = screen.getByText('Modal Content').parentElement;

        expect(cardElement).toHaveStyle({ width: '50%', height: '75%' });
    });
});
