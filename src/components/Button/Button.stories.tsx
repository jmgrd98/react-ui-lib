import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
    args: {
        title: 'Click me',
        variant: 'solid',
    },
}

export const Outline: Story = {
    args: {
        title: 'Click me',
        variant: 'outline',
    },
}

export const Ghost: Story = {
    args: {
        title: 'Click me',
        variant: 'ghost',
    },
}


