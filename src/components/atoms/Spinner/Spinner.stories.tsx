import { Meta, StoryObj } from '@storybook/react';
import Spinner, { SpinnerProps } from './Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'Components/Atoms/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type SpinnerStory = StoryObj<SpinnerProps>;

export const Small: SpinnerStory = {
    render: (args) => <Spinner {...args} className="w-4 h-4" />
};
export const Medium: SpinnerStory = {
    render: (args) => <Spinner {...args} className="w-8 h-8" />
};
export const Large: SpinnerStory = {
    render: (args) => <Spinner {...args} className="w-12 h-12" />
};
