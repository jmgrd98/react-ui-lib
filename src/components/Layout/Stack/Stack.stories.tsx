import { Box } from "../Box/Box";
import Stack from "./Stack";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Stack> = {
    title: 'Layout/Stack',
    component: Stack,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Stack className="gap-4 p-4 bg-gray-400" {...args} >
            <Box className="w-[100px] h-[100px] bg-blue-500"/>
            <Box className="w-[100px] h-[100px] bg-red-500"/>
            <Box className="w-[100px] h-[100px] bg-green-500"/>
        </Stack>
    )
}