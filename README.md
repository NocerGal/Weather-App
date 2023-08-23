# Weather App

This app will help you know the weather in your city!

## Start

Install All Dependencies

- Run the following command:
  npm install

Launch the App in Your Browser

- Start the app with:
  npm run dev

Get Your API Key

- Create an account on OpenWeatherMap (https://home.openweathermap.org/users/sign_up).
- After your account is validated, go to your profile and click on "My API keys."
- Copy your API key.
- Then, open the file src/private/token in your IDE.
- Replace 'Your Token Here' with the token you just copied.
- Save.

## Default Units (Aggregates)

- By default, OpenWeather returns the temperature as °C.
- °F is calculated based on the returned °C.
- If you want to change the default unit, go to src/components/Weather line 45 and update the props.
- If °C has been changed, go to line 35 to update the calculation to convert °C to your new unit.
- If °F has been changed, go to line 67 and calculate your temperature based on the value returned on line 35 (which is by default in °C).
