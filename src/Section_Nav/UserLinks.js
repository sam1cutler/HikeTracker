import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserLinks.css';

class UserLinks extends Component {

    render() {


        return (
            <div className='links-wrapper'>
                <Link 
                    to='/user/1234/hikes'
                    className='individual-link'
                >
                    Hikes
                </Link>
                <Link 
                    to='/user/1234/new-hike'
                    className='individual-link'
                >
                    New
                </Link>
                <Link 
                    to='/user/1234/summary'
                    className='individual-link'
                >
                    Summary
                </Link>
                <Link 
                    to='/user/1234/analysis'
                    className='individual-link'
                >
                    Analysis
                </Link>
            </div>
        )

    }

}

export default UserLinks;