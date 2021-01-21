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
            rating: '',
        }
    }

    static contextType = HikesContext;

    render() {

        const { name, date, distance, time, elevation, rating } = this.props.cardInfo;
        
        const interimDate = new Date(date)
        const finalDate = format(interimDate, 'd MMM yyyy');

        /*
        const testDate1 = new Date('08-Jan-2017');
        const testDate2 = format(testDate1, 'd MMM yyyy');
        console.log(testDate2)
        */

        return (
            <div className='hike-card'>
                <div className='card-title'>
                    <h3>{name}</h3>
                </div>
                <div className='card-element'>{finalDate}</div>
                <div className='card-element'>{distance} miles</div>
                <div className='card-element'>{time} hours</div>
                <div className='card-element'>{elevation} feet</div>
                <div className='card-element'>{rating}/5</div>
            </div>
        )

    }

}

export default HikeCard;