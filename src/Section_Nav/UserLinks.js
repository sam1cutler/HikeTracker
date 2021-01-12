import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom';
import './UserLinks.css';

class UserLinks extends Component {

    render() {


        return (
            <div className='links-wrapper'>
                <div className='individual-link'>
                    Logs
                </div>
                <div className='individual-link'>
                    New
                </div>
                <div className='individual-link'>
                    Summary
                </div>
                <div className='individual-link'>
                    Analysis
                </div>
            </div>
        )

    }

}

export default UserLinks;