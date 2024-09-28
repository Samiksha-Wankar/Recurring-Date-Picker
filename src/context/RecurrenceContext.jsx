import React, { createContext, useContext, useState, useMemo } from 'react';

const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
    startDate: new Date(),
    endDate: null,
    pattern: 'daily',
    interval: 1,
  });

  const value = useMemo(() => ({ recurrence, setRecurrence }), [recurrence]);

  return (
    <RecurrenceContext.Provider value={value}>
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrenceContext = () => useContext(RecurrenceContext);
