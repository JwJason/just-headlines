import React from 'react';
import CategoryMenu from './CategoryMenu';
import CountryMenu from './CountryMenu';
let classNames = require('classnames');

export default class SideMenu extends React.Component {
	setCategory(category) {
		this.props.setCategory(category);
	}

	setCountry(country) {
		this.props.setCountry(country);
	}

	render() {
		return (
			<aside className={classNames("menu columns is-multiline is-mobile", {'is-active': this.props.menuActive})} id="mainMenu">
				<section className="column is-full-desktop is-half-mobile section-categories">
					<p className="menu-label">
	    				Categories
					</p>
					<ul className="menu-list">
						<CategoryMenu category={this.props.category} setCategory={(category) => this.setCategory(category)} />
					</ul>
				</section>
				<section className="column is-full-desktop is-half-mobile section-countries">
					<p className="menu-label">
	    				Countries
					</p>
					<ul className="menu-list">
						<CountryMenu country={this.props.country} setCountry={(country) => this.setCountry(country)} /> 
					</ul>
				</section>
			</aside>
		);
	}
}