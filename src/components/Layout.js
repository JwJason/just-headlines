import React from 'react';
import LoadFailed from './LoadFailed';
import NavBar from './NavBar';
import NewsFeed from './NewsFeed';
import {fetchNews} from './NewsApi';
import SideMenu from './SideMenu';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			category: 'general',
			country : 'us',
			error: null,
			isLoaded: false,
			menuActive: false
		};
	}

	loadNews() {
		fetchNews(this.state.country, this.state.category)
			.then(res => res.json())
			.then(result => {
				let state = this.state;
				state.articles = result.articles;
				state.isLoaded = true;
				this.setState(state);
			})
			.catch(error => {
				let state = this.state;
				state.isLoaded = true;
				state.error = error;
				this.setState(state);
			});
	}

	componentDidMount() {
		this.loadNews();
	}

	setCategory(category) {
		let state = this.state;
		state.category = category;
		this.setState(state);
		this.loadNews();
	}

	setCountry(country) {
		let state = this.state;
		state.country = country;
		this.setState(state);
		this.loadNews();
	}

	toggleMenu() {
		let state = this.state;
		state.menuActive = !state.menuActive;
		this.setState(state);
	}

	render() {
		if (this.state.isLoaded) {
			if (this.state.error) {
				return (
					<LoadFailed />
				);
			} else {
				return (
					<div>
						<NavBar 
							country={this.state.country} 
							setCountry={(country) => this.setCountry(country)} 
							menuActive={this.state.menuActive}
							toggleMenu={() => this.toggleMenu()} 
						/>
						<div className="main-content columns">
							<div className="column is-one-fifth-widescreen is-one-quarter-desktop is-one-quarter-tablet is-one-half-mobile">
								<SideMenu 
									category={this.state.category} 
									country={this.state.country}
									menuActive={this.state.menuActive}
									setCategory={(category) => this.setCategory(category)} 
									setCountry={(country) => this.setCountry(country)}
								/>
							</div>
							<div className="column is-four-fifths-widescreen is-three-quarters-desktop is-three-quarters-tablet is-one-half-mobile">
								<NewsFeed 
									country={this.state.country} 
									articles={this.state.articles} 
								/>
							</div>
						</div>
					</div>
				);
			}
		} else {
			return (
				<div className="pageloader">
					<span className="title">Fetching News</span>
				</div>
			);
		}
	}
}