import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './HikeCard.css';
import HikesContext from '../HikesContext';


class HikeCard extends Component {

    static defaultProps = {
        cardInfo: {
            id: '',
            name: '',
            date: '2019-01-03T00:00:00.000Z',
            distance: '',
            time: '',
            elevation: '',
        }
    }

    static contextType = HikesContext;

    render() {

        const { id, name, date, distance, time, elevation, steps } = this.props.cardInfo;
        
        const interimDate = new Date(date)
        const finalDate = format(interimDate, 'd MMM yyyy');

        return (
            <div className='hike-card'>
                <div className='card-title'>
                    <h3>{name}</h3>
                </div>
                <div className='card-element'>{finalDate}</div>
                <div className='card-element'>{distance} miles</div>
                <div className='card-element'>{time} hours</div>
                <div className='card-element'>{elevation} feet</div>
                <div className='card-element'>{steps} steps</div>
            </div>
        )

    }

}

export default HikeCard;