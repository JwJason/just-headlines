![Just Headlines desktop screenshot](https://github.com/JwJason/just-headlines/blob/master/screenshot-desktop.png)
<img src="https://github.com/JwJason/just-headlines/blob/master/screenshot-tablet.png" width="700px">
<img src="https://github.com/JwJason/just-headlines/blob/master/screenshot-mobile.png" width="400px">

## About

Just Headlines is a simple news & weather app built with React and Bulma. The Lumen backend leverages a handful of third-party APIs.

## Installation

- Frontend: Project dependencies can be installed the usual way with npm or yarn. Set up .env variables as needed (see next section).
- Backend ('api' sub-folder): Project dependencies can be installed with composer. Run database migrations with artisan. Set up .env variables as needed (see next section).

## Environment Variables and API Keys

This app makes use of several different APIs:

- [News API](https://newsapi.org/)
- [OpenWeatherMap](https://openweathermap.org/)
- [ipstack](https://ipstack.com/)

You will need valid API keys for each of these services. API keys should be defined with the following Lumen app/.env variables:

- APP_API_KEY_NEWS
- APP_API_KEY_WEATHER
- APP_API_KEY_IPSTACK

Finally, you must tell the frontend where the backend base URL lives. Set the following Webpack .env variable:

- REACT_APP_API_BASE_URL

An example of this variable might be: `http://localhost:8000/api`. 

## Todo

- Finish mobile responsiveness.
- Implement a dark/night-mode theme and a theme switcher.
