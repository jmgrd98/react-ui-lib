import { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import Button from '../../atoms/Button/Button';

const meta: Meta<typeof Modal> = {
    title: 'Components/Molecules/Modal',
    component: Modal,
    parameters: {
        layout: 'centered', // Ensures the modal is centered in Storybook view
    },
    argTypes: {
        isOpen: { control: 'boolean' }, // Control for toggling the modal's visibility
        onClose: { action: 'close modal' }, // Action to log the modal close event
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

export const Default: ModalStory = (args: any) => (
    <div>
        <Button size={'lg'} onClick={args.onClose} className="mb-4">
            Open Modal
        </Button>
        <Modal {...args}>
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <p className="mb-4">This is a modal. Click the button below or the close icon to close it.</p>
            <Button onClick={args.onClose}>Close Modal</Button>
        </Modal>
    </div>
);

Default.args = {
    isOpen: false, // Initially not open
};

export const LargeModal: ModalStory = (args: any) => (
    <div>
        <Button size={'lg'} onClick={args.onClose} className="mb-4">
            Open Large Modal
        </Button>
        <Modal {...args} width={600} height={400}>
            <h2 className="text-xl font-bold mb-4">Large Modal Title</h2>
            <p className="mb-4">This is a larger modal to demonstrate different sizes.</p>
            <Button onClick={args.onClose}>Close Modal</Button>
        </Modal>
    </div>
);

LargeModal.args = {
    isOpen: false,
};

export const WithoutCloseButton: ModalStory = (args: any) => (
    <div>
        <Button size={'lg'}  onClick={args.onClose} className="mb-4">
            Open Modal without Close Button
        </Button>
        <Modal {...args}>
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <p className="mb-4">This modal does not have a close button.</p>
            {/* No close button */}
        </Modal>
    </div>
);

WithoutCloseButton.args = {
    isOpen: false,
    // onClose: undefined, // Optionally omitting onClose handler to disable closing
};
