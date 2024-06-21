import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Atoms/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Square: Story = {
    args: {
        shape: 'square',
        color: 'text-blue-500',
    },
}

export const Round: Story = {
    args: {
        shape: 'round',
        color: 'text-purple-500'
    }
}

export const Disabled: Story = {
    args: {
        shape: 'square',
        disabled: true
    }
}
