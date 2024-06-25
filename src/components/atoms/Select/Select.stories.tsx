import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'Components/Atoms/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        options: [
            {
                label: 'Option 1',
                value: '1',
            },
            {
                label: 'Option 2',
                value: '2',
            },
            {
                label: 'Option 3',
                value: '3',
            },
        ],
        search: true
    },
};

export const Disabled: Story = {
    args: {
        options: [
            {
                label: 'Option 1',
                value: '1',
            },
            {
                label: 'Option 2',
                value: '2',
            },
            {
                label: 'Option 3',
                value: '3',
            },
        ],
        disabled: true,
    },
};

export const Error: Story = {
    args: {
        options: [
            {
                label: 'Option 1',
                value: '1',
            },
            {
                label: 'Option 2',
                value: '2',
            },
            {
                label: 'Option 3',
                value: '3',
            },
        ],
        error: true,
    },
};
