import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './NavBar.css';
import UserLinks from './UserLinks';
import WelcomeLinks from './WelcomeLinks';

class NavBar extends Component {

    renderLinks() {

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

    render() {

        return (
            <div className='nav-bar-wrapper'>
                <div>
                    <Link to='/'>
                        <h1>HikeTracker???</h1>
                    </Link>
                </div>
                {this.renderLinks()}
            </div>
        )

    }

}

export default NavBar;