import { useContext } from 'react';
import { AggregatContext } from '../../contexts/AggregatContext';
import PropTypes from 'prop-types';

function SwitchAgregat({ aggregatOne, aggregatTwo }) {
  const { toggleAggregat } = useContext(AggregatContext);

  return (
    <div className="switcher">
      <span>{aggregatOne}</span>
      <label className="switch">
        <input type="checkbox" onClick={toggleAggregat} />
        <span className="slider round"></span>
      </label>
      <span>{aggregatTwo}</span>
    </div>
  );
}

SwitchAgregat.propTypes = {
  aggregatOne: PropTypes.string.isRequired,
  aggregatTwo: PropTypes.string.isRequired,
};

export default SwitchAgregat;
