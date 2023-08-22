import { createContext, useState } from 'react';

export const AggregatContext = createContext();

// eslint-disable-next-line react/prop-types
export const AggregatProvider = ({ children }) => {
  const [aggregat, setAggregat] = useState(true);
  const toggleAggregat = () => {
    setAggregat(!aggregat);
  };
  return (
    <AggregatContext.Provider value={{ aggregat, toggleAggregat }}>
      {children}
    </AggregatContext.Provider>
  );
};
