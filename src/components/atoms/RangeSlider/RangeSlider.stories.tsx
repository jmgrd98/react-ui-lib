import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import RangeSlider, { RangeSliderProps } from './RangeSlider';

const meta: Meta<typeof RangeSlider> = {
    title: 'Components/Atoms/RangeSlider',
    component: RangeSlider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

const Template: StoryObj<RangeSliderProps> = (args) => (
    <div className="flex items-center space-x-4">
        <RangeSlider {...args} />
        <span>{`[${args.defaultValue[0]}, ${args.defaultValue[1]}]`}</span>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    min: 0,
    max: 100,
    step: 1,
    defaultValue: [20, 80],
    className: 'w-64',
};
