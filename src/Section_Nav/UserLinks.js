import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserLinks.css';
import HikesContext from '../HikesContext';

class UserLinks extends Component {
    
    static contextType = HikesContext;

    render() {
        console.log('Inside UserLinks.js render; here is current context:')
        console.log(this.context)
        const currentUser = this.context.loggedInUser;

        return (
            <div className='links-wrapper'>
                <Link 
                    to={`/user/${currentUser}/hikes`}
                    className='individual-link'
                >
                    Hikes
                </Link>
                <Link 
                    to={`/user/${currentUser}/new-hike`}
                    className='individual-link'
                >
                    New
                </Link>
                <Link 
                    to={`/user/${currentUser}/summary`}
                    className='individual-link'
                >
                    Summary
                </Link>
                <Link 
                    to={`/user/${currentUser}/analysis`}
                    className='individual-link'
                >
                    Analysis
                </Link>
            </div>
        )

    }

}

export default UserLinks;