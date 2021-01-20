import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HikesContext from './HikesContext';
//import HikesApiService from './services/hikes-api-service';
import NavBar from './Section_Nav/NavBar';
import LandingPage from './Section_Main/LandingPage';
import SignupPage from './Section_Forms/SignupPage';
import LoginForm from './Section_Forms/LoginForm';
import HikesLog from './Section_Main/HikesLog';
import HikeDetail from './Section_Main/HikeDetail';
import NewHike from './Section_Forms/NewHike';
import EditHike from './Section_Forms/EditHike';
import SummaryPage from './Section_Main/SummaryPage';
import AnalysisPage from './Section_Main/AnalysisPage';

class App extends Component {

  state = {
    hikes: [],
    error: null,
  }


  /*-- functions for context --*/
  setHikesList = (hikesList) => {
    this.setState({
      hikes: hikesList
    })
  }
  

  handleDeleteHike = (hikeId) => {
    console.log('User wants to delete a specific hike.')
  }


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
          path='/login'
          component={LoginForm}
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
          path='/user/:userId/hikes/:hikeId/edit'
          component={EditHike}
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

    const value = {
      hikes: this.state.hikes,
      error: this.state.error,
      setHikes: this.setHikesList,
      deleteHike: this.handleDeleteHike,
    }

    return (
      <HikesContext.Provider value={value}>
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
      </HikesContext.Provider>
    )
  }
}

export default App;