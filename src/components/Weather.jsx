import { useState } from 'react';
import PropTypes from 'prop-types';

const api = {
  token: 'c37623aaa37f5bb486b7ae2f641abea5',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function Weather() {
  const [city, setCity] = useState('');
  const [icon, setIcon] = useState('');
  const [weather, setWeather] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [translateCity, setTranslateCity] = useState('');
  const [temperature, setTemperature] = useState('');

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handlSubmitForm = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${api.base}weather?q=${city}&units=metric&appid=${api.token}&lang=fr`
    );
    const listCountries = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api.token}`
    );
    const responseBody = await response.json();
    const responseListCountries = await listCountries.json();
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
    <>
      <div className="container">
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
        <div className="container__first">
          <p>{weather}</p>
          <img src={icon} alt={weather} />
        </div>
        <p>{temperature}</p>
      </div>
    </>
  );
}

Weather.propTypes = {
  localisation: PropTypes.string.isRequired,
  icon: PropTypes.string,
  alt: PropTypes.string,
};

export default Weather;
