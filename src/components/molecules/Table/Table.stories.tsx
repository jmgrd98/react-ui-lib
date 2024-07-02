import { Meta } from '@storybook/react';
import Table, { TableProps } from './Table';

const meta: Meta = {
    title: 'Components/Molecules/Table',
    component: Table,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

const Template: any = (args: TableProps) => (
    <div className="p-4">
        <Table {...args} />
    </div>
);

export const BasicTable = Template.bind({});
BasicTable.args = {
    columns: [
        { key: 'id', title: 'ID' },
        { key: 'name', title: 'Name' },
        { key: 'age', title: 'Age' },
    ],
    data: [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
        { id: 3, name: 'Mike Johnson', age: 35 },
    ],
};

export const CustomRenderTable = Template.bind({});
CustomRenderTable.args = {
    columns: [
        { key: 'id', title: 'ID' },
        { key: 'name', title: 'Name' },
        {
            key: 'status',
            title: 'Status',
            render: (item: any) => <span className={item.status === 'active' ? 'text-green-600' : 'text-red-600'}>{item.status}</span>,
        },
    ],
    data: [
        { id: 1, name: 'John Doe', status: 'active' },
        { id: 2, name: 'Jane Smith', status: 'inactive' },
        { id: 3, name: 'Mike Johnson', status: 'active' },
    ],
};
