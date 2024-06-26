import { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";
import { FaExclamationTriangle, FaInfoCircle, FaCheckCircle } from "react-icons/fa";

const meta: Meta<typeof Alert> = {
    title: "Components/Molecules/Alert",
    component: Alert,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

export const WarningAlert: StoryObj<typeof Alert> = {
    args: {
        children: (
            <>
                <h2 className="text-xl font-bold mb-2">Warning</h2>
                <p className="text-gray-700">This is a warning alert with an icon.</p>
            </>
        ),
        width: 300,
        height: 150,
        icon: <FaExclamationTriangle className="text-yellow-500 h-6 w-6" />
    },
};

export const InfoAlert: StoryObj<typeof Alert> = {
    args: {
        children: (
            <>
                <h2 className="text-xl font-bold mb-2">Information</h2>
                <p className="text-gray-700">This is an info alert with an icon.</p>
            </>
        ),
        width: 300,
        height: 150,
        icon: <FaInfoCircle className="text-blue-500 h-6 w-6" />
    },
};

export const SuccessAlert: StoryObj<typeof Alert> = {
    args: {
        children: (
            <>
                <h2 className="text-xl font-bold mb-2">Success</h2>
                <p className="text-gray-700">This is a success alert with an icon.</p>
            </>
        ),
        width: 300,
        height: 150,
        icon: <FaCheckCircle className="text-green-500 h-6 w-6" />
    },
};
