import React from 'react';
import { useRecurrenceContext } from '../context/RecurrenceContext';

const RecurrenceCustomization = () => {
  const { recurrence, setRecurrence } = useRecurrenceContext();

  return (
    <div className="w-full sm:w-auto text-white space-y-4">
      <div>
        <label className="block mb-2">Recurrence Interval</label>
        <input
          type="number"
          value={recurrence.interval}
          onChange={(e) =>
            setRecurrence((prev) => ({ ...prev, interval: e.target.value }))
          }
          className="bg-gray-800 text-white p-2 rounded-lg w-full"
          min="1"
        />
      </div>
    </div>
  );
};

export default React.memo(RecurrenceCustomization);
