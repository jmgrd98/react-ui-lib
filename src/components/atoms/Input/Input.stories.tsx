import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Components/Atoms/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        type: "text",
        placeholder: "Enter text",
    },
};

export const Password: Story = {
    args: {
        type: "password",
        placeholder: "Enter password",
    },
};

export const Number: Story = {
    args: {
        type: "number",
        placeholder: "Enter number",
    },
};

export const Date: Story = {
    args: {
        type: "date",
        placeholder: "Enter date",
    },
};

export const PIN: Story = {
    args: {
        type: 'pin',
        placeholder: 'Digite seu PIN'
    }
};

export const CPF: Story = {
    args: {
        type: 'cpf',
        placeholder: 'Digite seu CPF'
    }
};

export const CNPJ: Story = {
    args: {
        type: 'cnpj',
        placeholder: 'Digite seu CNPJ'
    }
}


