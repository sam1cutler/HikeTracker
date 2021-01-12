import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './Section_Nav/NavBar';
import HikesLog from './Section_Main/HikesLog';

class App extends Component {

  /*-- Render the two main clusters of Routes --*/
  renderNavBarRoutes() {
    
    return (
      <Route 
        path='/'
        component={NavBar}
      />
    )

  }

  renderMainBodyRoutes() {

    return (
      <Route 
        path='/'
        component={HikesLog}
      />
    )

  }

  render() {

    return (
      <div className='app-wrapper'>
        <nav>
          {this.renderNavBarRoutes()}
        </nav>
        <main className='main-section'>
          {this.renderMainBodyRoutes()}
        </main>
        <footer className='main-section'>
          Created by Sam Cutler
        </footer>
      </div>
    )

  }

}

export default App;