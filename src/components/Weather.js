import React from 'react';
import Ionicon from 'react-ionicons';
import NewsApi from './NewsApi';
import {Styles, weatherIcon} from './Definitions';

export default class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	}

	componentDidMount() {
		// Weather-fetching workflow:
		//     1. Fetch geolocation 
		//         1a. Fetch browser-based geolocation
		//         1b. If previous step fails, fetch IP-based geolocation
		//         1c. If previous step fails, use a default location
		//     2. Fetch weather, using geolocation coordinates as input data
		if (navigator.geolocation) {
  			navigator.geolocation.getCurrentPosition((position) => this.geolocationSuccess(position.coords), (error) => this.geolocationFailed(error));
		} else {
  			this.geolocationFailed(null);
		}
	}

	fetchWeather(coords) {
		const api = new NewsApi();
		api.fetchWeather(coords.latitude, coords.longitude)
			.then(res => res.json())
			.then(
				result => {
					let state = this.state;
					state.data = result;
					this.setState(state);
				},
				error => {
					let state = this.state;
					state.error = error;
					this.setState(state);
				}
			);
	}

 	geolocationSuccess(coords) {
		this.fetchWeather(coords);
	}

	geolocationFailed(error) { // If browser-based geolocation fails, use IP-based geolocation (via ipstack) 
		const api = new NewsApi();
		api.fetchLocation()
			.then(res => res.json())
			.then(
				result => {
					this.fetchWeather({latitude: result.latitude, longitude: result.longitude});
				},
				error => { 
					// If ipstack geolocation fails, fetch weather for default city (Chicago, IL)
					this.fetchWeather({latitude: 41.8781, longitude: -87.6298});
				}
			);
	}

	render() {
		if (this.state.data) {
			return (
				<a href={`https://openweathermap.org/weathermap?zoom=8&lat=${this.state.data.coord.lat}&lon=${this.state.data.coord.lon}`} target="_blank">
					<div className="weather">
			        	<div className="weather-icon">
			        		<Ionicon 
			        			icon={weatherIcon(this.state.data.weather[0].id)} 
			        			fontSize={Styles.get('weather-icon-fontsize')} 
			        			color={Styles.get('weather-icon-color')}
			        		/>
			            </div>
			            <div className="weather-info">
			            	<div className="weather-temp">{Math.round(this.state.data.main.temp)}°</div>
			              	<div className="weather-description">{this.state.data.weather[0].main}</div>
			              	<div className="weather-city">{this.state.data.name}</div>
			            </div>
			        </div>
		        </a>
			);
		} else {
			return (
				<div>No weather yet.</div>
			);
		}
	}
}
