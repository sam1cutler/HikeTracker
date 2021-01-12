import React, { Component } from 'react';
import './NavBar.css';
import UserLinks from './UserLinks';

class NavBar extends Component {

    render() {

        return (
            <div className='nav-bar-wrapper'>
                <div>
                    <h1>HikeTracker</h1>
                </div>
                <UserLinks />
            </div>
        )

    }

}

export default NavBar;