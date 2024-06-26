import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
    title: 'Components/Atoms/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Enter text",
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        placeholder: "Enter text",
    }
}

export const WithLabel: Story = {
    args: {
        placeholder: "Enter text",
        label: "Label",
    },
}


