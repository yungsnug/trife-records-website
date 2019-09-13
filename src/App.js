import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import CozyBedroomStory from './components/CozyBedroomStory';
import CozyLinks from './components/CozyLinks';
import HomePage from './components/HomePage';
import DividerLine from './components/DividerLine';

import Epk from './components/Epk';

import './App.css';

export default class App extends Component {
  home() {
    return (
      <Fragment>
        <CozyBedroomStory />
        <DividerLine />
        <CozyLinks />
        <HomePage />
      </Fragment>
    );
  }

  render() {
    return (
      <div className="appContainer">
        <Route exact path='/' render={this.home} />
        <Route path="/epk" component={Epk} />

        <div className="cozyFooter">made by cøzybøy with <span role="img" aria-label="blue-heart">💙</span></div>
      </div>
    );
  }
}
