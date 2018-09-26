// TODO: For Production usage, API keys shouldn't be exposed client-side. Wrap API endpoints in a server-side module.
function _validate(response) {
	if (!response.ok) {
    	throw Error(response.statusText);
	} else {
		return response;
	}
}

export async function fetchNews(country, category) {
	let apiKey = process.env.REACT_APP_API_KEY_NEWS;

	if (!country) country = '';
	if (!category) category = '';
	
	return _validate(await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`));
}

export async function fetchWeather(lat, lon) {
	let apiKey = process.env.REACT_APP_API_KEY_WEATHER;
	return _validate(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}&units=imperial`));
}

export async function fetchLocation() {
	let apiKey = process.env.REACT_APP_API_KEY_IPSTACK;
	let response = _validate(await fetch('https://api.ipify.org?format=json'));
	return _validate(await fetch(`https://api.ipstack.com/${response.json().ip}?access_key=${apiKey}`));
}