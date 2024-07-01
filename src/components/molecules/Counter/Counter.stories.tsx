import React, { useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Counter, { CounterProps, CounterHandle } from './Counter';

const meta: Meta<typeof Counter> = {
    title: 'Components/Molecules/Counter',
    component: Counter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<CounterProps>;

const Template: Story = (args) => {
    const counterRef = useRef<CounterHandle>(null);

    const handleReset = () => {
        if (counterRef.current) {
            counterRef.current.reset();
        }
    };

    return (
        <div className="space-y-4">
            <Counter ref={counterRef} {...args} />
            <button
                onClick={handleReset}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Reset
            </button>
        </div>
    );
};

export const Default: Story = Template.bind({});
Default.args = {
    initialCount: 0,
    min: 0,
    max: 10,
    className: 'w-64',
};
