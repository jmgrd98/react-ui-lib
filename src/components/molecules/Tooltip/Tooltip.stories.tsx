import { Meta, StoryObj } from '@storybook/react';
import Tooltip, { TooltipProps } from './Tooltip';
import { Text } from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

const meta: Meta<typeof Tooltip> = {
    title: 'Components/Molecules/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        position: {
            control: {
                type: 'select',
                options: ['top', 'right', 'bottom', 'left'],
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
};

export default meta;
type TooltipStory = StoryObj<TooltipProps>;

export const Top: TooltipStory = (args: any) => (
    <Tooltip {...args} className='bg-green-500 text-white w-[200px] max-h-[200px]' content={
        <>
            <Text size="sm">This is some description text in the tooltip.</Text>
        </>
    }>
        <Button label={'Hover me'} className="bg-blue-500 hover:bg-blue-600 text-white" />
    </Tooltip>
);

Top.args = {
    position: 'top',
};

export const Right: TooltipStory = (args: any) => (
    <Tooltip {...args} className='bg-green-500 text-white w-[200px] max-h-[200px]' content={
        <>
            <Text size="sm">This is some description text in the tooltip.</Text>
        </>
    }>
        <Button label={'Hover me'} className="bg-blue-500 hover:bg-blue-600 text-white" />
    </Tooltip>
);

Right.args = {
    position: 'right',
};

export const Bottom: TooltipStory = (args: any) => (
    <Tooltip {...args} className='bg-green-500 text-white w-[200px] max-h-[200px]' content={
        <>
            <Text size="sm">This is some description text in the tooltip.</Text>
        </>
    }>
        <Button label={'Hover me'} className="bg-blue-500 hover:bg-blue-600 text-white" />
    </Tooltip>
);

Bottom.args = {
    position: 'bottom',
};

export const Left: TooltipStory = (args: any) => (
    <Tooltip {...args} className='bg-green-500 text-white w-[200px] max-h-[200px]' content={
        <>
            <Text size="sm">This is some description text in the tooltip.</Text>
        </>
    }>
        <Button label={'Hover me'} className="bg-blue-500 hover:bg-blue-600 text-white" />
    </Tooltip>
);

Left.args = {
    position: 'left',
};
