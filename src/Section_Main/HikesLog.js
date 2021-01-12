import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HikesLog.css';
//import HikeCard from './HikeCard';

class HikesLog extends Component {

    render() {

        return (
            <div>
                <h2>Your hikes:</h2>
                <div className='hike-card'>
                    <Link to='/user/:userId/hikes/101'>
                        <h3>Mailbox Peak</h3>
                    </Link>
                    <p>10 July 2017</p>
                    <p>9.5 miles</p>
                    <p>3.5 hours</p>
                    <p>2,500 feet</p>
                    <div className='hike-card-buttons'>
                        <button>Edit</button>
                        {' '}
                        <button>Delete</button>
                    </div>
                </div>
                <div className='hike-card'>
                    <h3>Rattlesnake Ledge</h3>
                    <p>16 July 2017</p>
                    <p>5 miles</p>
                    <p>2 hours</p>
                    <p>1,500 feet</p>
                    <div className='hike-card-buttons'>
                        <button>Edit</button>
                        {' '}
                        <button>Delete</button>
                    </div>
                </div>
                <div className='hike-card'>
                    <h3>Tiger Mountain</h3>
                    <p>28 July 2017</p>
                    <p>8.5 miles</p>
                    <p>4 hours</p>
                    <p>2,000 feet</p>
                    <div className='hike-card-buttons'>
                        <button>Edit</button>
                        {' '}
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        )

    }

}

export default HikesLog;