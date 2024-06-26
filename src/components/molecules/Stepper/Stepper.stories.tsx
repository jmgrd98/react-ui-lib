import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Stepper, { StepperProps } from './Stepper';

const meta: Meta = {
    title: 'Components/Atoms/Stepper',
    component: Stepper,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

const Template: StoryObj<StepperProps> = (args) => {
    const [value, setValue] = useState(args.value || 0);

    const handleChange = (newValue: number) => {
        setValue(newValue);
    };

    return <Stepper {...args} value={value} onChange={handleChange} />;
};

export const Default: Story<StepperProps> = Template.bind({});
Default.args = {
    value: 0,
    min: 0,
    max: 10,
    step: 1,
};

export const SmallRange: Story<StepperProps> = Template.bind({});
SmallRange.args = {
    value: 5,
    min: 0,
    max: 10,
    step: 1,
};

export const LargeRange: Story<StepperProps> = Template.bind({});
LargeRange.args = {
    value: 50,
    min: 0,
    max: 100,
    step: 5,
};

export const CustomStep: Story<StepperProps> = Template.bind({});
CustomStep.args = {
    value: 10,
    min: 0,
    max: 100,
    step: 10,
};

export const Disabled: Story<StepperProps> = Template.bind({});
Disabled.args = {
    value: 0,
    min: 0,
    max: 10,
    step: 1,
    disabled: true,
};
