import { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsProps, Tab } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Molecules/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<TabsProps>;

export const Default: Story = {
    render: (args) => (
        <Tabs {...args}>
            <Tab label="Tab 1">
                <div>Content for Tab 1</div>
            </Tab>
            <Tab label="Tab 2">
                <div>Content for Tab 2</div>
            </Tab>
            <Tab label="Tab 3">
                <div>Content for Tab 3</div>
            </Tab>
        </Tabs>
    ),
};

Default.args = {};
