import { Meta, StoryObj } from '@storybook/react';
import Calendar, { CalendarProps } from './Calendar';

const meta: Meta<typeof Calendar> = {
    title: 'Components/Molecules/Calendar',
    component: Calendar,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type CalendarStory = StoryObj<CalendarProps>;

export const Default: CalendarStory = {
    args: {
        className: 'border p-4',
        onDateSelect: (date) => alert(`Date selected: ${date.toDateString()}`),
    },
};

export const PastDatesDisabled: CalendarStory = {
    args: {
        className: 'border p-4',
        onDateSelect: (date) => alert(`Date selected: ${date.toDateString()}`),
        allowPastDates: false,
    }
}
