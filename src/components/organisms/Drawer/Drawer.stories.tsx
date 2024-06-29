import React, { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Drawer, { DrawerProps } from './Drawer';
import Button from '../../atoms/Button/Button';

const meta: Meta<typeof Drawer> = {
    title: 'Components/Organisms/Drawer',
    component: Drawer,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        isOpen: { control: 'boolean' },
        onClose: { action: 'close' },
        side: {
            control: {
                type: 'select',
                options: ['left', 'right', 'top', 'bottom'],
            },
        },
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

type DrawerStory = StoryObj<DrawerProps>;

const Template: DrawerStory = (args: DrawerProps) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
        if (args.onClose) {
            args.onClose();
        }
    };

    useEffect(() => {
        setIsOpen(args.isOpen);
        console.log(args.isOpen)
    }, [args.isOpen]);

    return (
        <>
            <Button label={'Open Drawer'} onClick={handleOpen} className="z-10 mb-4 px-4 py-2 bg-blue-500 text-white rounded" />
            <Drawer {...args} isOpen={isOpen} onClose={handleClose}>
                <h2 className="text-xl font-bold mb-4">Drawer Content</h2>
                <p className="mb-4">This is the drawer content. Click the button below or the close icon to close it.</p>
                <Button label={'Close Drawer'} onClick={handleClose} className='text-white bg-red-500 hover:bg-red-600 cursor-pointer' />
            </Drawer>
        </>
    );
};

export const Default: DrawerStory = {
    render: Template,
    args: {
        isOpen: false,
        className: '',
        side: 'left',
    },
};

export const FromRight: DrawerStory = {
    render: Template,
    args: {
        isOpen: false,
        className: '',
        side: 'right',
    },
};

export const FromTop: DrawerStory = {
    render: Template,
    args: {
        isOpen: false,
        className: '',
        side: 'top',
    },
};

export const FromBottom: DrawerStory = {
    render: Template,
    args: {
        isOpen: false,
        className: '',
        side: 'bottom',
    },
};
