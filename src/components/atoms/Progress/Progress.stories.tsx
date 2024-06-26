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
    render: (args) => <Progress {...args} value={20} max={100} className='w-64' />,
};

export const Half: ProgressStory = {
    render: (args) => <Progress {...args} value={50} max={100} className="w-64" />,
};

export const AlmostFull: ProgressStory = {
    render: (args) => <Progress {...args} value={90} max={100} className="w-64" />,
};

export const CustomColor: ProgressStory = {
    render: (args) => (
        <Progress {...args} value={70} max={100} className="w-64 bg-red-500" />
    ),
};
