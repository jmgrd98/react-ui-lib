import { Meta, StoryFn } from '@storybook/react';
import Calendar, { CalendarProps } from './Calendar';

const meta: Meta<CalendarProps> = {
    title: 'Components/Molecules/Calendar',
    component: Calendar,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

const Template: StoryFn<CalendarProps> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
    className: 'border p-4',
    onDateSelect: (date: Date) => alert(`Date selected: ${date}`),
};

export const PastDatesDisabled = Template.bind({});
PastDatesDisabled.args = {
    className: 'border p-4',
    allowPastDates: false,
};

export const RangeCalendar = Template.bind({});
RangeCalendar.args = {
    className: 'border p-4',
    range: true,
    onRangeSelect: (startDate: Date, endDate: Date) =>
        alert(`Range selected: ${startDate.toDateString()} - ${endDate.toDateString()}`),
};