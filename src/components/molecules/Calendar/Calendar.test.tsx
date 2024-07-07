import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from './Calendar';
import { format } from 'date-fns';

describe('Calendar', () => {
    it('renders calendar component', () => {
        render(<Calendar />);
        expect(screen.getByText('Janeiro')).toBeInTheDocument();
        expect(screen.getByText('2024')).toBeInTheDocument();
        expect(screen.getByText('Dom')).toBeInTheDocument();
    });

    it('navigates to previous month', () => {
        render(<Calendar />);
        const prevButton = screen.getByRole('button', { name: /previous month/i });
        
        fireEvent.click(prevButton);
        expect(screen.getByText('Dezembro')).toBeInTheDocument();
    });

    it('navigates to next month', () => {
        render(<Calendar />);
        const nextButton = screen.getByRole('button', { name: /next month/i });
        
        fireEvent.click(nextButton);
        expect(screen.getByText('Fevereiro')).toBeInTheDocument();
    });

    it('selects a date', () => {
        const handleDateSelect = jest.fn();
        render(<Calendar onDateSelect={handleDateSelect} />);
        const today = new Date();
        const todayDateString = format(today, 'd');

        fireEvent.click(screen.getByText(todayDateString));
        expect(handleDateSelect).toHaveBeenCalledWith(expect.any(Date));
    });

    it('disables past dates when allowPastDates is false', () => {
        render(<Calendar allowPastDates={false} />);
        const pastDate = new Date(2022, 11, 25);
        const pastDateString = format(pastDate, 'd');

        fireEvent.click(screen.getByText(pastDateString));
        expect(screen.getByText(pastDateString)).toHaveClass('cursor-not-allowed');
    });

    it('selects a range of dates', () => {
        const handleRangeSelect = jest.fn();
        render(<Calendar range onRangeSelect={handleRangeSelect} />);
        const today = new Date();
        const todayDateString = format(today, 'd');
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + 1);
        const nextDayDateString = format(nextDay, 'd');

        fireEvent.click(screen.getByText(todayDateString));
        fireEvent.click(screen.getByText(nextDayDateString));

        expect(handleRangeSelect).toHaveBeenCalledWith(expect.any(Date), expect.any(Date));
    });

    it('changes the month using the month select', () => {
        render(<Calendar />);
        const monthSelect = screen.getByPlaceholderText('Janeiro');

        fireEvent.change(monthSelect, { target: { value: '2' } });
        expect(screen.getByPlaceholderText('Fevereiro')).toBeInTheDocument();
    });

    it('changes the year using the year select', () => {
        render(<Calendar />);
        const yearSelect = screen.getByText('2024');
        
        fireEvent.click(yearSelect);
        fireEvent.click(screen.getByText('2025'));
        
        expect(screen.getByText('2025')).toBeInTheDocument();
    });    

    it('renders days from the current month and adjacent months', () => {
        render(<Calendar />);
        const days = screen.getAllByText('1');
        
        // Assert the count of elements
        expect(days.length).toBeGreaterThanOrEqual(2);
    
        // Further assertions to differentiate them
        const previousMonthDay = days.find(day => day.classList.contains('text-gray-400'));
        const currentMonthDay = days.find(day => !day.classList.contains('text-gray-400'));
    
        expect(previousMonthDay).toBeInTheDocument();
        expect(currentMonthDay).toBeInTheDocument();
    
        expect(previousMonthDay).toHaveClass('text-gray-400');
        expect(currentMonthDay).not.toHaveClass('text-gray-400');
    });  

    it('highlights today\'s date', () => {
        render(<Calendar />);
        const today = new Date();
        const todayDateString = format(today, 'd');

        expect(screen.getByText(todayDateString)).toHaveClass('bg-blue-500');
    });

    it('selects a date only once in single date mode', () => {
        const handleDateSelect = jest.fn();
        render(<Calendar onDateSelect={handleDateSelect} />);
        const today = new Date();
        const todayDateString = format(today, 'd');
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + 1);
        const nextDayDateString = format(nextDay, 'd');

        fireEvent.click(screen.getByText(todayDateString));
        fireEvent.click(screen.getByText(nextDayDateString));

        expect(handleDateSelect).toHaveBeenCalledTimes(1);
    });

    it('selects a range of dates only once in range mode', () => {
        const handleRangeSelect = jest.fn();
        render(<Calendar range onRangeSelect={handleRangeSelect} />);
        const today = new Date();
        const todayDateString = format(today, 'd');
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + 1);
        const nextDayDateString = format(nextDay, 'd');

        fireEvent.click(screen.getByText(todayDateString));
        fireEvent.click(screen.getByText(nextDayDateString));

        expect(handleRangeSelect).toHaveBeenCalledTimes(1);
    });
});
