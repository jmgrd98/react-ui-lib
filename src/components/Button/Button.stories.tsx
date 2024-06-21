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
        children: 'Click me',
        variant: 'solid',
    },
}

export const Outline: Story = {
    args: {
        children: 'Click me',
        variant: 'outline',
    },
}

export const Ghost: Story = {
    args: {
        children: 'Click me',
        variant: 'ghost',
    },
}

export const SuccessSolid: Story = {
    args: {
        children: 'Click me',
        variant: 'solid',
        colorScheme: 'success',
    },
}

export const SuccessOutline: Story = {
    args: {
        children: 'Click me',
        variant: 'outline',
        colorScheme: 'success',
    },
}

export const SuccessGhost: Story = {
    args: {
        children: 'Click me',
        variant: 'ghost',
        colorScheme: 'success',
    },
}

export const DangerSolid: Story = {
    args: {
        children: 'Click me',
        variant: 'solid',
        colorScheme: 'danger',
    },
}

export const DangerOutline: Story = {
    args: {
        children: 'Click me',
        variant: 'outline',
        colorScheme: 'danger',
    },
}

export const DangerGhost: Story = {
    args: {
        children: 'Click me',
        variant: 'ghost',
        colorScheme: 'danger',
    },
}

export const AlertSolid: Story = {
    args: {
        children: 'Click me',
        variant: 'solid',
        colorScheme: 'alert',
    },
}

export const AlertOutline: Story = {
    args: {
        children: 'Click me',
        variant: 'outline',
        colorScheme: 'alert',
    },
}

export const AlertGhost: Story = {
    args: {
        children: 'Click me',
        variant: 'ghost',
        colorScheme: 'alert',
    },
}


