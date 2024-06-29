import { Meta, StoryObj } from '@storybook/react';
import Spinner, { SpinnerProps } from './Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'Components/Atoms/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        className: {
            control: 'text',
            description: 'CSS classes to apply to the spinner',
            defaultValue: '',
        },
    },
};

export default meta;

type SpinnerStory = StoryObj<SpinnerProps>;

export const Small: SpinnerStory = {
    args: {
        className: 'w-10 h-10 border-red-500 border-t-transparent',
    },
};