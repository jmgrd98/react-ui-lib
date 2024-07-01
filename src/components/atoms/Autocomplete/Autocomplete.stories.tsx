import { Meta, StoryObj } from '@storybook/react';
import Autocomplete, { AutocompleteProps } from './Autocomplete';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Autocomplete> = {
    title: 'Components/Atoms/Autocomplete',
    component: Autocomplete,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<AutocompleteProps>;

const Template: Story = (args: AutocompleteProps) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        action('selected')(value);
    };

    return (
        <div>
            <Autocomplete {...args} onSelect={handleSelect} />
            <p className="mt-4">Selected Value: {selectedValue}</p>
        </div>
    );
};

export const Default: Story = Template.bind({});
Default.args = {
    suggestions: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'],
    className: 'w-64',
    onSelect: action('selected'),
};
