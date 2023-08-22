import { useContext, useState } from 'react';
import axios from 'axios';
import SwitchAgregat from './ToogleSwitch/ToogleSwitch';
import { AggregatContext } from '../utils';

const api = {
  token: 'c37623aaa37f5bb486b7ae2f641abea5',
  base: 'https:///api.openweathermap.org/data/2.5/',
};

function Weather() {
  const [city, setCity] = useState('');
  const [icon, setIcon] = useState('');
  const [weather, setWeather] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [translateCity, setTranslateCity] = useState('');
  const [temperature, setTemperature] = useState('');

  const { aggregat } = useContext(AggregatContext);

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handlSubmitForm = async (e) => {
    e.preventDefault();

    const listCountries = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api.token}`
    );
    const responseListCountries = listCountries.data;
    console.log(responseListCountries);
    const response = await axios.get(
      `${api.base}weather?q=${city}&units=metric&appid=${api.token}&lang=fr`
    );

    const responseBody = response.data;

    setIcon(
      `https://openweathermap.org/img/wn/${responseBody.weather[0].icon}@2x.png`
    );
    setWeather(responseBody.weather[0].description);
    setCountryCode(responseBody.sys.country);
    setTranslateCity(
      responseListCountries[0].local_names[countryCode.toLowerCase()]
    );
    setTemperature(Math.round(responseBody.main.temp * 2) / 2);
  };

  return (
    <div className="container">
      <SwitchAgregat firstChoice="°C" secondChoice="°F" />
      <form onSubmit={handlSubmitForm}>
        <label htmlFor="localisation">Localisation</label>
        <input
          type="text"
          id="localisation"
          name="localisation"
          placeholder={'write a localisation...'}
          onChange={onChangeCity}
          required
        />
        <button type="submit">Rechercher</button>
      </form>
      <h1>{translateCity}</h1>
      <p>{weather}</p>
      <div className="container__first">
        <p>
          {temperature}
          {aggregat == true ? '°C' : '°F'}
        </p>
        <img src={icon} alt={weather} />
      </div>
    </div>
  );
}

export default Weather;
