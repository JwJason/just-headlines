import React from 'react';
import {Countries} from './Definitions';
let classNames = require('classnames');

export default class CountryMenu extends React.Component {
	render() {
		const countries = Array.from(Countries.keys()).map(country => {
	        return (
				<a  className={classNames(this.props.itemClassName, {'is-active': this.props.country === country})} 
					onClick={() => this.props.setCountry(country)} 
					key={"country_"+country} 
				>
					{Countries.get(country)}
				</a>
	        );	
	    });

	    return countries;
	}
}

