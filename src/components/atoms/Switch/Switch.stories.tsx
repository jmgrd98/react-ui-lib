import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Switch, { SwitchProps } from './Switch';

const meta: Meta = {
    title: 'Components/Atoms/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        checked: { control: 'boolean' },
        onChange: { action: 'changed' },
    },
};

export default meta;

const Template: StoryObj<SwitchProps> = (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);

    const handleChange = (checked: boolean) => {
        setIsChecked(checked);
        args.onChange && args.onChange(checked);
    };

    return <Switch {...args} checked={isChecked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
    checked: false,
    className: '',
};

export const Checked = Template.bind({});
Checked.args = {
    checked: true,
    className: '',
};
