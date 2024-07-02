import { useState } from 'react';
import { Meta } from '@storybook/react';
import Stepper, { StepperProps } from './Stepper';

const meta: Meta = {
    title: 'Components/Atoms/Stepper',
    component: Stepper,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

const Template: any = (args: StepperProps) => {
    const [value, setValue] = useState(args.value || 0);

    const handleChange = (newValue: number) => {
        setValue(newValue);
    };

    return <Stepper {...args} value={value} onChange={handleChange} />;
};

export const Default: any = Template.bind({});
Default.args = {
    value: 0,
    min: 0,
    max: 10,
    step: 1,
};

export const SmallRange: any = Template.bind({});
SmallRange.args = {
    value: 5,
    min: 0,
    max: 10,
    step: 1,
};

export const LargeRange: any = Template.bind({});
LargeRange.args = {
    value: 50,
    min: 0,
    max: 100,
    step: 5,
};

export const CustomStep: any = Template.bind({});
CustomStep.args = {
    value: 10,
    min: 0,
    max: 100,
    step: 10,
};

export const Disabled: any = Template.bind({});
Disabled.args = {
    value: 0,
    min: 0,
    max: 10,
    step: 1,
    disabled: true,
};
