import axios from 'axios';
import { tokenApi } from '../private/token';

const api = {
  token: tokenApi,
  baseUrlListCountries: 'http://api.openweathermap.org/geo/1.0/',
  baseUrlWeatherInformations: 'https:///api.openweathermap.org/data/2.5/',
};

export async function fetchCountries(city) {
  const response = await axios.get(
    `${api.baseUrlListCountries}direct?q=${city}&appid=${api.token}`
  );
  return response;
}

export async function fetchCityWeather(city) {
  const response = await axios.get(
    `${api.baseUrlWeatherInformations}weather?q=${city}&units=metric&appid=${api.token}&lang=fr`
  );
  return response;
}
