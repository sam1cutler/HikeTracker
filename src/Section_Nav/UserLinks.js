import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        //console.log('Inside UserLinks.js render; here is current context:')
        //console.log(this.context)
        //const currentUser = this.context.loggedInUser;

        return (
            <div className='links-wrapper'>
                <Link 
                    to={`/hikes`}
                    className='individual-link'
                >
                    Hikes
                </Link>
                <Link 
                    to={`/hikes/new-hike`}
                    className='individual-link'
                >
                    New
                </Link>
                <Link 
                    to={`/hikes/summary`}
                    className='individual-link'
                >
                    Summary
                </Link>
                {/*
                <Link 
                    to={`/hikes/analysis`}
                    className='individual-link'
                >
                    Analysis
                </Link>
                */}
                <Link 
                    to={`/`}
                    className='individual-link'
                    onClick={this.handleLogoutClick}
                >
                    Logout
                </Link>
            </div>
        )

    }

}

export default UserLinks;