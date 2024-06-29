import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Pagination, { PaginationProps } from './Pagination';

export default {
    title: 'Components/Molecules/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
    },
} as Meta;

const Template: StoryObj<PaginationProps> = (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        args.onPageChange(page);
    };

    return (
        <Pagination
            {...args}
            currentPage={currentPage}
            onPageChange={handlePageChange}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    currentPage: 1,
    totalPages: 5,
    onPageChange: (page) => alert(`Page changed to: ${page}`),
};

export const ManyPages = Template.bind({});
ManyPages.args = {
    currentPage: 1,
    totalPages: 20,
    onPageChange: (page) => alert(`Page changed to: ${page}`),
};

export const MiddlePage = Template.bind({});
MiddlePage.args = {
    currentPage: 10,
    totalPages: 20,
    onPageChange: (page) => alert(`Page changed to: ${page}`),
};
