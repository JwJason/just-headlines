import React from 'react';
import Ionicon from 'react-ionicons';

export default class LoadFailed extends React.Component {
	render() { 
		return (
			<div className="hero is-dark is-fullheight">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">
							<Ionicon icon="md-sad" fontSize="35px" color="white"/> Something went wrong.
						</h1>
						<h2 className="subtitle">
							We couldn&apos;t fetch your headlines right now. Try again later.
						</h2>
					</div>
				</div>
			</div>
		);
	}
}