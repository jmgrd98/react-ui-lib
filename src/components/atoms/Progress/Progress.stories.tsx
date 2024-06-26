import { Meta, StoryObj } from '@storybook/react';
import Progress, { ProgressProps } from './Progress';

const meta: Meta<typeof Progress> = {
    title: 'Components/Atoms/Progress',
    component: Progress,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type ProgressStory = StoryObj<ProgressProps>;

export const Default: ProgressStory = {
    args: {
        value: 20,
        max: 100,
        className: 'w-64',
    },
};