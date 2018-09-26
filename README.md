## About

Just Headlines is a simple news & weather app built with React / Bulma. 

## Installation

Project dependencies can be installed the usual way with npm or yarn.

## API Keys

This app makes use of several different APIs:

- [News API](https://newsapi.org/)
- [OpenWeatherMap](https://openweathermap.org/)
- [ipstack](https://ipstack.com/)

You will need valid API keys for each of these services. API keys should be defined with the following .env file variables:

- REACT_APP_API_KEY_NEWS
- REACT_APP_API_KEY_WEATHER
- REACT_APP_API_KEY_IPSTACK

Needless to say, this setup is **insecure** since it leaves your private API keys exposed client-side. This is fine for development purposes, but for production deployment the API calls must be moved into a backend script.

## Todo

- Finish mobile responsiveness.
- Implement a dark/night-mode theme and a theme switcher.

![Just Headlines desktop screenshot](https://github.com/JwJason/just-headlines/blob/master/screenshot-desktop.png)
