import React, { forwardRef, useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isSameMonth, isToday, addMonths, subMonths, setMonth, setYear, getYear, getMonth } from 'date-fns';
import { cn } from "../../../utils";
import Select from '../../atoms/Select/Select';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

export type CalendarProps = {
    className?: string;
    onDateSelect?: (date: Date) => void;
    allowPastDates?: boolean;
    range?: boolean;
    onRangeSelect?: (startDate: Date, endDate: Date) => void;
};

const months = [
    { label: 'Janeiro', value: 'Janeiro' },
    { label: 'Fevereiro', value: 'Fevereiro' },
    { label: 'Março', value: 'Março' },
    { label: 'Abril', value: 'Abril' },
    { label: 'Maio', value: 'Maio' },
    { label: 'Junho', value: 'Junho' },
    { label: 'Julho', value: 'Julho' },
    { label: 'Agosto', value: 'Agosto' },
    { label: 'Setembro', value: 'Setembro' },
    { label: 'Outubro', value: 'Outubro' },
    { label: 'Novembro', value: 'Novembro' },
    { label: 'Dezembro', value: 'Dezembro' },
];

const years = Array.from({ length: 100 }, (_, i) => {
    const year = getYear(new Date()) - 50 + i;
    return { label: year.toString(), value: year.toString() };
});

const Calendar = forwardRef<HTMLDivElement, CalendarProps>(({ className, onDateSelect, allowPastDates = true, range = false, onRangeSelect }, ref) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedRange, setSelectedRange] = useState<Date[]>([]);

    const daysInMonth = eachDayOfInterval({
        start: startOfWeek(startOfMonth(currentDate)),
        end: endOfWeek(endOfMonth(currentDate)),
    });

    const handlePrevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    const handleDateSelect = (date: Date) => {
        if (!allowPastDates && date < new Date()) {
            return;
        }

        if (!range) {
            setSelectedRange([date]);
            if (onDateSelect) {
                onDateSelect(date);
            }
        } else {
            if (selectedRange.length === 2) {
                setSelectedRange([date]);
                if (onDateSelect) {
                    onDateSelect(date);
                }
            } else if (selectedRange.length === 1) {
                const [start] = selectedRange;
                // const newRange = eachDayOfInterval({ start, end: date });
                setSelectedRange([start, date]);
                if (onRangeSelect) {
                    onRangeSelect(start, date);
                }
            } else {
                setSelectedRange([date]);
            }
        }
    };

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMonth = parseInt(event.target.value, 10);
        setCurrentDate(setMonth(currentDate, selectedMonth));
    };

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedYear = parseInt(event.target.value, 10);
        setCurrentDate(setYear(currentDate, selectedYear));
    };

    return (
        <div ref={ref} className={cn('calendar max-w-md mx-auto bg-white rounded-lg shadow-md p-4', className)}>
            <div className="flex justify-between items-center mb-4">
                <button className="text-gray-500 hover:text-black" onClick={handlePrevMonth}>
                    <FaChevronLeft />
                </button>
                <div className="flex items-center space-x-2">
                    <Select 
                        placeholder={currentDate.toLocaleDateString('pt-BR', { month: 'long' }).charAt(0).toUpperCase() + currentDate.toLocaleDateString('pt-BR', { month: 'long' }).slice(1)}
                        value={getMonth(currentDate)}
                        options={months}
                        onChange={handleMonthChange}
                        className="border-none font-semibold"
                        showIcon={false}
                    />
                    <Select 
                        placeholder={currentDate.toLocaleDateString('pt-BR', { year: 'numeric' }).toString()}
                        value={getYear(currentDate)}
                        options={years}
                        onChange={handleYearChange}
                        className="border-none font-semibold"
                        showIcon={false}
                    />
                </div>
                <button className="text-gray-500 hover:text-black" onClick={handleNextMonth}>
                    <FaChevronRight />
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
                    <div key={day} className="font-medium">{day}</div>
                ))}
                {daysInMonth.map((day: Date) => {
                    const isDisabled = !allowPastDates && day < new Date();
                    const isSelected = selectedRange.some(selectedDay => format(selectedDay, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'));
                    const isInRange = selectedRange.length === 2 && day >= selectedRange[0] && day <= selectedRange[1];

                    return (
                        <div
                            key={day.toString()}
                            onClick={() => handleDateSelect(day)}
                            className={cn(
                                'py-2 rounded-lg cursor-pointer transition-colors',
                                !isSameMonth(day, currentDate) ? 'text-gray-400' : '',
                                isToday(day) ? 'bg-blue-500 text-white' : '',
                                isSelected ? 'bg-blue-700 text-white' : '',
                                isInRange && !isSelected ? 'bg-blue-200' : '',
                                isDisabled ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-blue-100'
                            )}
                            style={{ opacity: isDisabled ? 0.6 : 1, pointerEvents: isDisabled ? 'none' : 'auto' }}
                        >
                            {format(day, 'd')}
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

export default Calendar;
