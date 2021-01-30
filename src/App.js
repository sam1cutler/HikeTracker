import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HikesContext from './HikesContext';
import WelcomeLinks from './Section_Nav/WelcomeLinks';
import UserLinks from './Section_Nav/UserLinks';
import Footer from './Footer';
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
    activeHike: { date: '01-Jan-2020' },
    error: null,
  }

  /*-- functions for context --*/
  setHikesList = (hikesList) => {
    this.setState({
      hikes: hikesList
    })
  }

  clearHikesList = () => {
    this.setState({
      hikes: []
    })
  }

  setActiveHike = (activeHike) => {
    this.setState( {activeHike} )
  }

  clearActiveHike = () => {
    this.setState({
      activeHike: {
        date: '01-Jan-2020'
      }
    })
  }

  /*-- Render the two main clusters of Routes --*/
  renderNavBarRoutes() {
    return (
      <>
          {['/','/signup','/sample','/login'].map(path => (
              <Route
                  exact
                  key={path}
                  path={path}
                  component={WelcomeLinks}
              />
          ))}

          <Route 
              path='/hikes'
              component={UserLinks}
          />
      </>
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
          path='/hikes'
          component={HikesLog}
        />
        <Route 
          exact
          path='/hikes/:hikeId/detail'
          component={HikeDetail}
        />
        <Route 
          exact
          path='/hikes/:hikeId/edit'
          component={EditHike}
        />
        <Route 
          exact
          path='/hikes/new-hike'
          component={NewHike}
        />
        <Route 
          exact
          path='/hikes/summary'
          component={SummaryPage}
        />
        <Route 
          exact
          path='/hikes/analysis'
          component={AnalysisPage}
        />
      </>
    )
  }

  renderFooter() {
    return (
      <Route
        exact
        path='/'
        component={Footer}
      />
    )
  }

  render() {

    const value = {
      hikes: this.state.hikes,
      activeHike: this.state.activeHike,
      error: this.state.error,
      setHikes: this.setHikesList,
      clearHikes: this.clearHikesList,
      setActiveHike: this.setActiveHike,
      clearActiveHike: this.clearActiveHike,
    }

    return (
      <HikesContext.Provider value={value}>
        <div className='app-wrapper'>
          <nav className='main-section nav-bar'>
            {this.renderNavBarRoutes()}
          </nav>
          <main className='main-section'>
            {this.renderMainBodyRoutes()}
          </main>
          {this.renderFooter()}
        </div>
      </HikesContext.Provider>
    )
  }
}

export default App;