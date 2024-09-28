import React, { useMemo } from 'react';
import CustomDatePicker from './components/CustomDatePicker';
import RecurrenceCustomization from './components/RecurrenceCustomization';
import CalendarPreview from './components/CalendarPreview';
import AnimatedBackground from './components/AnimatedBackground';
import RecurrenceOptions from './components/RecurrenceOptions';
import HowToUseGuide from './components/HowToUseGuide';
import Stars from './components/Stars';
import { useRecurrenceContext } from './context/RecurrenceContext';

function App() {
  const { recurrence } = useRecurrenceContext();
  const selectedDates = useMemo(() => generateSelectedDates(recurrence), [recurrence]);

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <Stars /> 
      <AnimatedBackground />

      <div className="relative z-10 flex flex-col items-center space-y-8 p-8 sm:p-16">
        <h1 className="p-4 text-2xl sm:text-4xl text-white text-center relative transition-transform duration-300 hover:scale-105 hover:opacity-90 shiny-text">
          Recurring Date Picker
        </h1>
        <HowToUseGuide />
        <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-6 sm:space-y-0 items-start w-full sm:w-auto">
          <CustomDatePicker />
          <RecurrenceOptions />
          <RecurrenceCustomization />
        </div>
        <CalendarPreview dates={selectedDates} className="bg-gray-800 p-4 rounded-lg shadow-lg w-full sm:w-auto" />
      </div>
    </div>
  );
}

export default App;

function generateSelectedDates({ startDate, endDate, pattern, interval }) {
  const dates = [];
  let currentDate = new Date(startDate);

  while (currentDate <= (endDate || new Date())) {
    dates.push(new Date(currentDate));
    switch (pattern) {
      case 'daily':
        currentDate.setDate(currentDate.getDate() + interval);
        break;
      case 'weekly':
        currentDate.setDate(currentDate.getDate() + interval * 7);
        break;
      case 'monthly':
        currentDate.setMonth(currentDate.getMonth() + interval);
        break;
      case 'yearly':
        currentDate.setFullYear(currentDate.getFullYear() + interval);
        break;
      default:
        break;
    }
  }

  return dates;
}
