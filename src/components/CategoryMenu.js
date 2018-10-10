import React from 'react';
import Ionicon from 'react-ionicons';
import {Categories, Styles} from './Definitions';

export default class CategoryMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hoverIndex: -1};
    }

    render() {
        const categories = Array.from(Categories.keys()).map((category, index) => {
            const isActive = category === this.props.category;
            const isHover = index === this.state.hoverIndex;

            return (
                <li key={"category_"+category}>
                    <a 
                        className={isActive ? 'is-active' : ''} 
                        onClick={e => this.props.setCategory(category)} 
                        onMouseEnter={e => this.setHover(index)} 
                        onMouseLeave={e => this.setHover(-1)}
                    >
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

        return categories;
    }

    setHover(hoverIndex) {
        this.setState({hoverIndex: hoverIndex});
    }
}

      
