import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
    title: 'Components/Organisms/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        bgColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => <Header {...args} />,
    args: {
        className: '',
        logoText: 'MyApp',
        bgColor: 'white',
        onSearch: (query) => console.log('Search:', query),
    } as const,
} as const;
