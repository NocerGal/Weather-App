import { useContext } from 'react';
import { AggregatContext } from '../../utils';

function SwitchAgregat({ firstChoice, secondChoice }) {
  const { toggleAggregat } = useContext(AggregatContext);

  return (
    <div className="switcher">
      <span>{firstChoice}</span>

      <label className="switch">
        <input type="checkbox" onClick={toggleAggregat} />
        <span className="slider round"></span>
      </label>
      <span>{secondChoice}</span>
    </div>
  );
}

export default SwitchAgregat;
