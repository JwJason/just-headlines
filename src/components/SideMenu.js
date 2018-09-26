import React from 'react';
import Ionicon from 'react-ionicons';
import {Categories, Styles} from './Definitions';

export default class SideMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {hoverIndex: -1};
	}

	setCategory(category) {
		this.props.setCategory(category);
	}

	setHover(hoverIndex) {
		this.setState({hoverIndex: hoverIndex});
	}

	render() {
      	const categories = Array.from(Categories.keys()).map((category, index) => {
      		const isActive = category === this.props.category;
      		const isHover = index === this.state.hoverIndex;

      		return (
      			<li key={"category_"+category}>
      				<a className={isActive ? 'is-active' : ''} onClick={e => this.setCategory(category)} onMouseEnter={e => this.setHover(index)} onMouseLeave={e => this.setHover(-1)}>
      					<span className="menu-icon">
      						<Ionicon 
      							icon={Categories.get(category).icon} 
      							fontSize={Styles.get('menu-icon-fontsize')} 
      							color={isActive ? Styles.get('menu-icon-color-active') : isHover ? Styles.get('menu-icon-color-hover') : Styles.get('menu-icon-color-normal')} 
      						/>
      					</span>
      					<span className="menu-description">
      						{Categories.get(category).label}
      					</span>
      				</a>
      			</li>
      		);
      	});

		return (
			<aside className="menu">
				<p className="menu-label">
    				Categories
				</p>
				<ul className="menu-list">
					{categories}
				</ul>
			</aside>
		);
	}
}