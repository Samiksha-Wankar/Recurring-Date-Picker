import React from 'react';

const CalendarPreview = ({ dates }) => {
  return (
    <div className="w-full text-white">
      <h2 className="text-2xl mb-4 text-center">Selected Dates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dates.length > 0 ? (
          dates.map((date, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center transition-transform duration-300 transform hover:scale-105 hover:bg-gray-700"
            >
              {date.toDateString()}
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">No dates selected</p>
        )}
      </div>
    </div>
  );
};

export default CalendarPreview;
