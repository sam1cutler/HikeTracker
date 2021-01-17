import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HikeCard.css';

class HikeCard extends Component {

    render() {

        const { id, name, date, distance, time, elevation } = this.props.cardInfo;

        return (
            <div className='hike-card'>
                <Link to={`/user/1234/hikes/${id}`}>
                    <h3>{name}</h3>
                </Link>
                <p>{date}</p>
                <p>{distance} miles</p>
                <p>{time} hours</p>
                <p>{elevation} feet</p>
                <div className='hike-card-buttons'>
                    <button>Edit</button>
                    {' '}
                    <button>Delete</button>
                </div>
            </div>
        )

    }

}

export default HikeCard;