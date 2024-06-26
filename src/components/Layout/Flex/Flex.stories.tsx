
import { Meta } from '@storybook/react';
import Flex  from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'Layout/Flex',
    component: Flex,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

const Template: any = (args: any) => (
    <Flex {...args}>
        <div className="bg-blue-200 p-4">Item 1</div>
        <div className="bg-blue-400 p-4">Item 2</div>
        <div className="bg-blue-600 p-4">Item 3</div>
    </Flex>
);

export const Row = Template.bind({});
Row.args = {
    direction: 'row',
    justify: 'start',
    align: 'start',
    wrap: 'nowrap',
};

export const Column = Template.bind({});
Column.args = {
    direction: 'col',
    justify: 'start',
    align: 'start',
    wrap: 'nowrap',
};

export const JustifyCenter = Template.bind({});
JustifyCenter.args = {
    direction: 'row',
    justify: 'center',
    align: 'start',
    wrap: 'nowrap',
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
    direction: 'row',
    justify: 'start',
    align: 'center',
    wrap: 'nowrap',
};
