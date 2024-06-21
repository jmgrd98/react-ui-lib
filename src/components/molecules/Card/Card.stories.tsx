import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import Button from "../../atoms/Button/Button";

const meta: Meta<typeof Card> = {
    title: "Components/Molecules/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Vertical: Story = (args: any) => (
    <div className="space-y-4">
        <Card {...args}>
            <h2 className="text-xl font-bold mb-2">Card Title 1</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button
                variant={'solid'}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
                Action
            </Button>
        </Card>
    </div>
);

Vertical.args = {
    width: '50%',
    height: '300px',
};

export const Horizontal: Story = (args: any) => (
    <div className="flex gap-4">
        <Card {...args}>
            <h2 className="text-xl font-bold mb-2">Card Title 1</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button
                variant={'solid'}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
                Action
            </Button>
        </Card>
    </div>
);

Horizontal.args = {
    width: '100%',
    height: '150px',
};
