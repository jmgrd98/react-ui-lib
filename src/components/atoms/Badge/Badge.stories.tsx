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

export const SolidPrimary: Story = {
    args: {
        variant: 'solid',
        colorScheme: 'primary',
        children: "badge"
    },
}

export const OutlinePrimary: Story = {
    args: {
        variant: 'outline',
        colorScheme: 'primary',
        children: "badge"
    },
}

export const SolidSuccess: Story = {
    args: {
        variant: 'solid',
        colorScheme: 'success',
        children: "badge"
    },
}

export const OutlineSuccess: Story = {
    args: {
        variant: 'outline',
        colorScheme: 'success',
        children: "badge"
    },
}

export const SolidDanger: Story = {
    args: {
        variant: 'solid',
        colorScheme: 'danger',
        children: "badge"
    },
}

export const OutlineDanger: Story = {
    args: {
        variant: 'outline',
        colorScheme: 'danger',
        children: "badge"
    },
}

export const AlertSolid: Story = {
    args: {
        variant: 'solid',
        colorScheme: 'alert',
        children: "badge"
    },
}

export const AlertOutline: Story = {
    args: {
        variant: 'outline',
        colorScheme: 'alert',
        children: "badge"
    },
}




