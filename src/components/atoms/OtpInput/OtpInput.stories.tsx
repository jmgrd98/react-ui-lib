import { Meta, StoryObj } from '@storybook/react';
import OtpInput from './OtpInput';

const meta: Meta<typeof OtpInput> = {
    title: 'Components/Atoms/OtpInput',
    component: OtpInput,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta; 

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        length: 4,
        onComplete: (otp: string) => {console.log(otp)}
    }
}