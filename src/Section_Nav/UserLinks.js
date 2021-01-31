import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './UserLinks.css';
import HikesContext from '../HikesContext';
import TokenService from '../services/token-service';

class UserLinks extends Component {
    
    static contextType = HikesContext;

    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        this.context.clearHikes();
    }

    render() {

        return (
            <div className='nav-bar-wrapper'>
                <div>
                    <Link to='/hikes'>
                        <h1>HikeTracker</h1>
                    </Link>
                </div>
                <div className='links-wrapper-container'>
                    <div className='links-wrapper'>
                        <NavLink 
                            to={`/hikes`}
                            exact
                            className='individual-link'
                        >
                            Hikes
                        </NavLink>
                        <NavLink 
                            to={`/hikes/new-hike`}
                            exact
                            className='individual-link'
                        >
                            New
                        </NavLink>
                    </div>
                    <div className='links-wrapper'>
                        <NavLink 
                            to={`/hikes/summary`}
                            exact
                            className='individual-link'
                        >
                            Summary
                        </NavLink>
                        <Link 
                            to={`/`}
                            className='individual-link'
                            onClick={this.handleLogoutClick}
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        )

    }

}

export default UserLinks;