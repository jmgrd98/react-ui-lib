import { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionProps } from './Accordion';
import { Item } from './Accordion'; // Import the Item component
import { Text } from '../../atoms/Text/Text';

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
            <Item title="Section 1">
                <Text>This is the content of section 1.</Text>
            </Item>
            <Item title="Section 2">
                <Text>This is the content of section 2.</Text>
            </Item>
            <Item title="Section 3">
                <Text>This is the content of section 3.</Text>
            </Item>
        </Accordion>
    )
};

Default.args = {
    className: 'max-w-lg mx-auto',
};
