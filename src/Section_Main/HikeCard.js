import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './HikeCard.css';
import HikesContext from '../HikesContext';


class HikeCard extends Component {

    state = {
        icons: {
            date: '🗓',
            distance: 'mi 👣',
            time: 'hr ⏱',
            elevation: 'ft 🏔',
            rating: '⭐️'
        }
    }

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

    renderDataPiece = (key, value) => {
        if (value) {
            return (
                <div className={`card-element card-${key}`} key={key}>
                    {value} {this.state.icons[key]}
                </div>
            )
        } else {
            return (
                <div className={`card-element card-${key}`} key={key}>
                    -- {this.state.icons[key]}
                </div>
            )
        }
        
    }

    render() {

        const { name, date, distance, time, elevation, rating } = this.props.cardInfo;
        const cardInfo = { date, distance, time, elevation, rating }
        
        // Format date
        const interimDate = new Date(date)
        cardInfo['date'] = format(interimDate, 'd MMM yyyy');

        // Generate card element pieces, depending on whether have value
        let cardDataPieces = {};
        for (const [key, value] of Object.entries(cardInfo)) {
            cardDataPieces[key] = this.renderDataPiece(key, value);
        }

        //console.log(cardDataPieces)

        return (
            <div className='hike-card'>
                <div className='hike-card-sub-section card-title'>
                    <h3>{name}</h3>
                </div>
                <div className='hike-card-sub-section card-date-container'>
                    {cardDataPieces.date}
                </div>
                <div className='hike-card-sub-section card-dist-time-container'>
                    {cardDataPieces.distance}
                    {cardDataPieces.time}
                </div>
                <div className='hike-card-sub-section card-elev-rate-container'>
                    {cardDataPieces.elevation}
                    {cardDataPieces.rating}
                </div>

            </div>
        )

    }

}

export default HikeCard;