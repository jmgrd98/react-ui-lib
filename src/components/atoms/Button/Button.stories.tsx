import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SolidPrimary: Story = (args: any) => (
    <Button {...args} variant="solid" color="bg-blue-500 text-white">
        Solid Primary Button
    </Button>
);

SolidPrimary.args = {
    size: 'md',
    onClick: () => alert("Button clicked"),
};

export const OutlineSuccess: Story = (args: any) => (
    <Button {...args} variant="outline" color='text-primary-600'>
        Outline Success Button
    </Button>
);

OutlineSuccess.args = {
    size: 'md',
    variant: 'outline',
    onClick: () => alert("Button clicked"),
};

export const GhostCustom: Story = (args: any) => (
    <Button {...args} variant="ghost" color="text-purple-500">
        Ghost Custom Button
    </Button>
);

GhostCustom.args = {
    size: 'md',
    onClick: () => alert("Button clicked"),
};
