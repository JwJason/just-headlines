import React from 'react';
import Weather from './Weather';
import {Countries} from './Definitions';

export default class NavBar extends React.Component {
    setCountry(country) {
      this.props.setCountry(country);
    }

    render() {
      const countries = Array.from(Countries.keys()).map(country => {
        return (
          <a className="navbar-item" onClick={e => this.setCountry(country)} key={"country_"+country}>
            {Countries.get(country)}
          </a>
        );
      });

      return (
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="just-headlines.png" alt="Just Headlines" width="200px"/>
            </a>
          </div>
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                {Countries.get(this.props.country)}
              </a>
              <div className="navbar-dropdown is-boxed">
                {countries}
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
        </nav>
      );
  }
}
