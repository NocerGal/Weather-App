import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AggregatContext = createContext();

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

AggregatProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
