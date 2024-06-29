import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import GlobalPhoneInput, { GlobalPhoneInputProps } from './PhoneInput';

const meta: Meta<typeof GlobalPhoneInput> = {
    title: 'Components/Atoms/GlobalPhoneInput',
    component: GlobalPhoneInput,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        value: { control: 'text' },
        onChange: { action: 'changed' },
        defaultCountry: { control: 'text' },
        className: { control: 'text' },
    },
};

export default meta;

type PhoneInputStory = StoryObj<GlobalPhoneInputProps>;

export const Default: PhoneInputStory = {
    args: {
        value: '',
        defaultCountry: 'us',
        className: 'w-64',
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);

        return (
            <GlobalPhoneInput
                {...args}
                value={value}
                onChange={(phone) => {
                    setValue(phone);
                    args.onChange(phone);
                }}
            />
        );
    },
};

export const WithInitialValue: PhoneInputStory = {
    args: {
        value: '+1234567890',
        defaultCountry: 'us',
        className: 'w-64',
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);

        return (
            <GlobalPhoneInput
                {...args}
                value={value}
                onChange={(phone) => {
                    setValue(phone);
                    args.onChange(phone);
                }}
            />
        );
    },
};

export const WithDifferentCountry: PhoneInputStory = {
    args: {
        value: '',
        defaultCountry: 'fr',
        className: 'w-64',
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);

        return (
            <GlobalPhoneInput
                {...args}
                value={value}
                onChange={(phone) => {
                    setValue(phone);
                    args.onChange(phone);
                }}
            />
        );
    },
};
