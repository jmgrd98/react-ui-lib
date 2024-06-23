import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'Components/Atoms/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
    args: {
        variant: 'solid',
        color: '#45db35',
        children: "badge"
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        color: '#45db35',
        children: "badge"
    },
};
