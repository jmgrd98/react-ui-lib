import { useState } from 'react';
import Card from '../Card/Card';
import Button from '../../atoms/Button/Button';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Button onClick={openModal}>Open Modal</Button>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    {/* Modal container */}
                    <Card width={400} height={300} className="relative z-50">
                        <div className="absolute top-0 right-0 p-2">
                            <Button onClick={closeModal}>Close Modal</Button>
                        </div>
                        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                        <p className="mb-4">This is a modal. Click the button below to close it.</p>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default Modal;
