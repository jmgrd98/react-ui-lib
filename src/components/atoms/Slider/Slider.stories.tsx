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

type SliderStory = StoryObj<SliderProps>;

export const Default: SliderStory = {
    args: {
        value: 50,
        min: 0,
        max: 100,
        step: 1,
        className: 'w-64',
    },
    argTypes: {
        onChange: { action: 'changed' },
    },
};