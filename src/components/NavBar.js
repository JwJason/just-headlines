import React from 'react';
import {Countries, Styles} from './Definitions';
import Ionicon from 'react-ionicons';
import CountryMenu from './CountryMenu';
import Weather from './Weather';
let classNames = require('classnames');

export default class NavBar extends React.Component {
    render() {
      return (
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="just-headlines.png" alt="Just Headlines" width="200px"/>
            </a>
            <a 
              className={classNames("navbar-burger burger", {"is-active": this.props.menuActive})} 
              data-target="hamburger-menu" 
              onClick={() => this.props.toggleMenu()}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  <Ionicon icon="md-globe" fontSize="28px" color={Styles.get('globe-icon-color')}/>
                  {Countries.get(this.props.country)}
                </a>
                <div className="navbar-dropdown is-boxed">
                  <CountryMenu itemClassName="navbar-item" country={this.props.country} setCountry={country => this.props.setCountry(country)} />
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <div className="control">
                    <Weather />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
  }
}
