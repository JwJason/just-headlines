// TODO: For Production usage, API keys shouldn't be exposed client-side. Wrap API endpoints in a server-side module.
export default class NewsApi {
	_validate(response) {
		if (!response.ok) {
        	throw Error(response.statusText);
   		} else {
   			return response;
   		}
	}

	async fetchNews(country, category) {
		let apiKey = process.env.REACT_APP_API_KEY_NEWS;

		if (!country) country = '';
		if (!category) category = '';
		
		return this._validate(await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`));
	}

	async fetchWeather(lat, lon) {
		let apiKey = process.env.REACT_APP_API_KEY_WEATHER;
		return this._validate(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}&units=imperial`));
	}

	async fetchLocation() {
		let apiKey = process.env.REACT_APP_API_KEY_IPSTACK;
		let response = this._validate(await fetch('https://api.ipify.org?format=json'));
		return this._validate(await fetch(`https://api.ipstack.com/${response.json().ip}?access_key=${apiKey}`));
	}
}