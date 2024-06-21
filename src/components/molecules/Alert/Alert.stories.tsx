import { Meta, StoryObj } from "@storybook/react";
import Card from "../Card/Card";
import Button from "../../atoms/Button/Button";

const meta: Meta<typeof Card> = {
    title: "Components/Molecules/Alert",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Card> = {
    args: {
        children: (
            <>
                <h2 className="text-xl font-bold mb-2">Card Title 1</h2>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button
                    variant={"solid"}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                >
                    Action
                </Button>
            </>
        ),
    },
};

Default.args = {
    width: 300,
    height: 150
}
