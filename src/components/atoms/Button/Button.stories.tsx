import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        hoverColor: { control: 'color' },
        activeColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = (args: any) => (
    <Button {...args} variant="solid" label="Solid Button" />
);

Solid.args = {
    size: 'md',
    className: '',
    backgroundColor: '#30c422',
    hoverColor: '#28a745',
    activeColor: '#1e7e34',
    onClick: () => alert("Button clicked"),
};

export const Outline: Story = (args: any) => (
    <Button {...args} variant="outline" label="Outline Button" />
);

Outline.args = {
    size: 'md',
    className: '',
    backgroundColor: '#30c422',
    hoverColor: '#28a745',
    activeColor: '#1e7e34',
    onClick: () => alert("Button clicked"),
};

export const Ghost: Story = (args: any) => (
    <Button {...args} variant="ghost" label="Ghost Button" />
);

Ghost.args = {
    size: 'md',
    className: '',
    backgroundColor: '#30c422',
    hoverColor: '#28a745',
    activeColor: '#1e7e34',
    onClick: () => alert("Button clicked"),
};
