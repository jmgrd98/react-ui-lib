import React, { useState } from 'react';
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

type DrawerStory = StoryObj<DrawerPr
