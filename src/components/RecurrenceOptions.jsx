import React from 'react';
import { useRecurrenceContext } from '../context/RecurrenceContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useRecurrenceContext();

  const handlePatternChange = (e) => {
    setRecurrence((prev) => ({ ...prev, pattern: e.target.value }));
  };

  return (
    <div className="w-full sm:w-auto text-white space-y-4">
      <div>
        <label className="block mb-2">Recurrence Pattern</label>
        <select
          value={recurrence.pattern}
          onChange={handlePatternChange}
          className="bg-gray-800 text-white p-2 rounded-lg w-full"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
    </div>
  );
};

export default React.memo(RecurrenceOptions);
