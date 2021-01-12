import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WelcomeLinks.css';

class WelcomeLinks extends Component {

    render() {


        return (
            <div className='links-wrapper'>
                <Link 
                    to='/signup'
                    className='individual-link'
                >
                    Sign Up
                </Link>

                <Link 
                    to='/user/1234/hikes'
                    className='individual-link'
                >
                    Sample User
                </Link>
            </div>
        )

    }

}

export default WelcomeLinks;