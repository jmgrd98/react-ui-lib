import { Meta, StoryObj } from '@storybook/react';
import Slider, { SliderProps } from './Slider';

const meta: Meta<typeof Slider> = {
    title: 'Components/Atoms/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

const Template: StoryObj<SliderProps> = (args) => (
    <div className="flex items-center space-x-4">
        <Slider {...args} />
        <span>{Array.isArray(args.value) ? `${args.value[0]} - ${args.value[1]}` : args.value}</span>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    className: 'w-64',
};

export const RangeMode = Template.bind({});
RangeMode.args = {
    value: [30, 70],
    min: 0,
    max: 100,
    step: 1,
    className: 'w-64',
};

export const CustomRange = Template.bind({});
CustomRange.args = {
    value: [10, 90],
    min: 0,
    max: 100,
    step: 1,
    className: 'w-64',
};
