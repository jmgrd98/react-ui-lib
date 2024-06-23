import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal, { ModalProps } from './Modal';
import Button from '../../atoms/Button/Button';

const meta: Meta<typeof Modal> = {
    title: 'Components/Molecules/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        isOpen: { control: 'boolean' },
        onClose: { action: 'close modal' },
    },
    decorators: [
        (Story) => (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type ModalStory = StoryObj<ModalProps>;

export const Default: ModalStory = (args: any) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
        args.onClose();
    };

    return (
        <div>
            <Button label={'Open Modal'} onClick={handleOpen} className="bg-blue-500 hover:bg-blue-600 text-white mb-4" />
            <Modal {...args} width={300} isOpen={isOpen} onClose={handleClose}>
                <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                <p className="mb-4">This is a modal. Click the button below or the close icon to close it.</p>
                <Button label={'Close Modal'} onClick={handleClose} className='text-white bg-blue-500 hover:bg-blue-600' />
            </Modal>
        </div>
    );
};

Default.args = {
    isOpen: false,
};
