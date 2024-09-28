import React from 'react';
import DatePicker from 'react-datepicker';
import { useRecurrenceContext } from '../context/RecurrenceContext';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = () => {
  const { recurrence, setRecurrence } = useRecurrenceContext();

  return (
    <div className="w-full sm:w-auto flex flex-col space-y-4 text-white">
      <div>
        <label className="block mb-2">Start Date</label>
        <DatePicker
          selected={recurrence.startDate}
          onChange={(date) => setRecurrence((prev) => ({ ...prev, startDate: date }))}
          className="bg-gray-800 text-white p-2 rounded-lg w-full"
        />
      </div>
      <div>
        <label className="block mb-2">End Date (Optional)</label>
        <DatePicker
          selected={recurrence.endDate}
          onChange={(date) => setRecurrence((prev) => ({ ...prev, endDate: date }))}
          className="bg-gray-800 text-white p-2 rounded-lg w-full"
          isClearable
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;
