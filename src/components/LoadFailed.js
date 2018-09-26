import React from 'react';
import Ionicon from 'react-ionicons';

export default class LoadError extends React.Component {
	render() { 
		return (
			<div class="hero is-dark is-fullheight">
				<div class="hero-body">
					<div class="container">
						<h1 class="title">
							<Ionicon icon="md-sad" fontSize="35px" color="white"/> Something went wrong.
						</h1>
						<h2 class="subtitle">
							We couldn't fetch your headlines right now. Try again later.
						</h2>
					</div>
				</div>
			</div>
		);
	}
}