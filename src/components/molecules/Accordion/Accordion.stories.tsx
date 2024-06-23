import { Meta, StoryObj } from '@storybook/react';
import Accordion, { AccordionProps } from './Accordion';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Molecules/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type AccordionStory = StoryObj<AccordionProps>;

export const Default: AccordionStory = {
    render: (args) => (
        <Accordion {...args}>
            <Accordion.Item title="Section 1">
                <p>This is the content of section 1.</p>
            </Accordion.Item>
            <Accordion.Item title="Section 2">
                <p>This is the content of section 2.</p>
            </Accordion.Item>
            <Accordion.Item title="Section 3">
                <p>This is the content of section 3.</p>
            </Accordion.Item>
        </Accordion>
    )
};

Default.args = {
    className: 'max-w-lg mx-auto',
};
