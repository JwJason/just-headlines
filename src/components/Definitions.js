export const Categories = new Map([
	['general', {label:'Top Stories',icon:'md-paper'}],
	['business', {label:'Business',icon:'md-briefcase'}],
	['health', {label:'Health',icon:'md-body'}],
	['science', {label:'Science',icon:'md-planet'}],
	['technology', {label:'Technology',icon:'md-build'}],
	['sports', {label:'Sports',icon:'md-american-football'}],
	['entertainment', {label:'Entertainment',icon:'md-desktop'}]
]);

export const Countries = new Map([
	['us', 'United States'],
	['jp', 'Japan'],
	['gb', 'Great Britain']
]);

export const Styles = new Map([
	['menu-icon-fontsize', '24px'],
	['menu-icon-color-normal', '#757763'],
	['menu-icon-color-active', '#FFF'],
	['menu-icon-color-hover', ''],
	['weather-icon-fontsize', '50px'],
	['weather-icon-color', '#757763']
]);

export const weatherIcon = (code) => {
	if (code >= 200 && code < 300) {
		return 'md-thunderstorm';
	} else if (code >= 300 && code < 400) {
		return 'md-rainy';
	} else if (code >= 500 && code < 600) {
		return 'md-rainy';
	} else if (code >= 600 && code < 700) {
		return 'md-snow';
	} else if (code === 800) {
		return 'md-sunny';
	} else if (code === 801) {
		return 'md-partly-sunny';
	} else if (code === 802 || code === 803 || code === 804) {
		return 'md-cloud';
	} else {
		// Unknown code, revert to generic icon
		return 'md-thermometer';
	}
}