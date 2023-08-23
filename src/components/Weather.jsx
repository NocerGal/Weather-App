import { useContext, useState } from 'react';
import SwitchAgregat from './ToogleSwitch/ToogleSwitch';
import { AggregatContext } from '../contexts/AggregatContext';
import { fetchCountries, fetchCityWeather } from '../services/api';

function Weather() {
  const { aggregat } = useContext(AggregatContext);
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState({
    icon: '',
    weather: '',
    countryCode: '',
    translateCity: '',
    temperature: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handlSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const countries = await fetchCountries(city);
      const weather = await fetchCityWeather(city);
      const countriesData = countries.data;
      const weatherData = weather.data;
      setWeatherInfo({
        icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
        weather: weatherData.weather[0].description,
        countryCode: weatherData.sys.country,
        translateCity:
          countriesData[0].local_names[weatherInfo.countryCode.toLowerCase()],
        temperature: Math.round(weatherData.main.temp * 2) / 2,
      });
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <SwitchAgregat aggregatOne="°C" aggregatTwo="°F" />
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
      <div
        className="container"
        style={{ display: submitted ? 'block' : 'none' }}
      >
        <h1>{weatherInfo.translateCity}</h1>
        <p>{weatherInfo.weather}</p>
        <div className="container__first">
          <p>
            {aggregat === false
              ? Math.round(weatherInfo.temperature * (9 / 5) + 32)
              : weatherInfo.temperature}
            {aggregat == true ? '°C' : '°F'}
          </p>
          <img src={weatherInfo.icon} alt={weatherInfo.weather} />
        </div>
      </div>
    </div>
  );
}

export default Weather;
