// TODO: For Production usage, API keys shouldn't be exposed client-side. Wrap API endpoints in a server-side module.
function _validate(response) {
	if (!response.ok) {
    	throw Error(response.statusText);
	} else {
		return response;
	}
}

const baseUrl = process.env.REACT_APP_API_BASE_URL;
console.log(baseUrl);

export async function fetchNews(country, category) {
	const baseUrl = process.env.REACT_APP_API_BASE_URL;
console.log(baseUrl);
	if (!country) country = '';
	return _validate(await fetch(`${baseUrl}/articles/country/${country}${category ? '/category/'+category : ''}`));
}

export async function fetchWeather(lat, lon) {
	return _validate(await fetch(`${baseUrl}/weather/?lat=${lat}&lon=${lon}`));
}

export async function fetchLocation() {
	let response = _validate(await fetch('https://api.ipify.org?format=json'));
	return _validate(await fetch(`${baseUrl}/geolocation`));
}