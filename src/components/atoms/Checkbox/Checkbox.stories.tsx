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
        checkedColor: '#00ffd0',
    },
}

export const Round: Story = {
    args: {
        shape: 'round',
        checkedColor: '#00ffd0',
    }
}

export const Disabled: Story = {
    args: {
        shape: 'square',
        disabled: true,
    }
}
