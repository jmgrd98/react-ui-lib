import { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';
import Card from "../Card/Card";

const meta: Meta<typeof Carousel> = {
    title: 'Components/Molecules/Carousel',
    component: Carousel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const slides = [
    <Card width={300} height={200} key={0} />,
    <Card width={300} height={200} key={1} />,
    <Card width={300} height={200} key={2} />,
];

export const Default: Story = {
    render: (args) => <Carousel {...args}>{slides}</Carousel>,
    args: {
        interval: 3000,
        className: 'w-full max-w-md mx-auto',
    },
};

export const NoAutoSlide: Story = {
    render: (args) => <Carousel {...args}>{slides}</Carousel>,
    args: {
        interval: 0,
        className: 'w-full max-w-md mx-auto',
    },
};
