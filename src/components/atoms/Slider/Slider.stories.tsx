import { Meta, StoryObj } from '@storybook/react';
import Slider, { SliderProps } from './Slider';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Slider> = {
    title: 'Components/Atoms/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

const Template: StoryObj<SliderProps> = (args) => {
    const [value, setValue] = useState<number | [number, number]>(args.value);

    const handleChange = (newValue: number | [number, number]) => {
        setValue(newValue);
        action('changed')(newValue); // Log the change action
        if (args.onChange) {
            args.onChange(newValue);
        }
    };

    return (
        <div className="flex items-center space-x-4">
            <Slider {...args} value={value} onChange={handleChange} />
            <span>{Array.isArray(value) ? `${value[0]} - ${value[1]}` : value}</span>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    className: 'w-64',
    onChange: action('changed'),
};
