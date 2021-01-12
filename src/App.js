import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './Section_Nav/NavBar';
import LandingPage from './Section_Main/LandingPage';
import SignupPage from './Section_Forms/SignupPage';
import HikesLog from './Section_Main/HikesLog';
import HikeDetail from './Section_Main/HikeDetail';
import NewHike from './Section_Forms/NewHike';
import SummaryPage from './Section_Main/SummaryPage';
import AnalysisPage from './Section_Main/AnalysisPage';

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
      <>
        <Route 
          exact
          path='/'
          component={LandingPage}
        />
        <Route 
          exact
          path='/signup'
          component={SignupPage}
        />
        <Route 
          exact
          path='/user/:userId/hikes'
          component={HikesLog}
        />
        <Route 
          exact
          path='/user/:userId/hikes/:hikeId'
          component={HikeDetail}
        />
        <Route 
          exact
          path='/user/:userId/new-hike'
          component={NewHike}
        />
        <Route 
          exact
          path='/user/:userId/summary'
          component={SummaryPage}
        />
        <Route 
          exact
          path='/user/:userId/analysis'
          component={AnalysisPage}
        />
      </>
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