import { Meta, StoryObj } from '@storybook/react';
import Tabs, { Tab } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Molecules/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type TabsStory = StoryObj;

export const Default: TabsStory = {
    render: (args: any, ref: any) => (
        <Tabs ref={ref} {...args} className="w-full">
            <Tab label="Tab 1">Content for Tab 1</Tab>
            <Tab label="Tab 2">Content for Tab 2</Tab>
            <Tab label="Tab 3">Content for Tab 3</Tab>
        </Tabs>
    ),
};
