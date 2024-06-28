import { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';
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
    <Card width={300} height={200} className='border-red-500' key={0}>
        <p>Slide 1</p>
    </Card>,
    <Card width={300} height={200} className='border-blue-500'  key={1}>
        <p>Slide 2</p>
    </Card>,
    <Card width={300} height={200} className='border-green-500'  key={2}>
        <p>Slide 3</p>
    </Card>,
    <Card width={300} height={200} className='border-yellow-500'  key={3}>
        <p>Slide 4</p>
    </Card>,
    <Card width={300} height={200} className='border-purple-500'  key={4}>
        <p>Slide 5</p>
    </Card>,
];

export const Default: Story = {
    render: (args) => <Carousel {...args}>{slides}</Carousel>,
    args: {
        className: 'w-full max-w-md mx-auto',
        visibleCount: 1,
        slideCount: 1,
    },
};

export const TwoVisible: Story = {
    render: (args) => <Carousel {...args}>{slides}</Carousel>,
    args: {
        className: 'w-full max-w-md mx-auto',
        visibleCount: 2,
        slideCount: 1,
    },
};

export const ThreeVisible: Story = {
    render: (args) => <Carousel {...args}>{slides}</Carousel>,
    args: {
        className: 'w-full max-w-md mx-auto',
        visibleCount: 3,
        slideCount: 2,
    },
};
