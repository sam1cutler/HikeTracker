import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HikeDetail.css';
// import STORE from '../store';
import HikeCard from './HikeCard';
import HikesContext from '../HikesContext';
// import PropTypes from 'prop-types';

class HikeDetail extends Component {

    static contextType = HikesContext;

    handleDeleteHike = (event) => {
        event.preventDefault();
        console.log('User wants to delete a hike.')
    }

    render() {

        const activeHike = this.context.hikes.find(hike => 
            hike.id.toString() === this.props.match.params.hikeId);
        
        const { weather, notes, reference, social_reference } = activeHike || '';

        return (
            <div className='hike-detail-wrapper'>
                <HikeCard
                    cardInfo={activeHike}
                />
                <section className='hike-details-section'>
                    <p>Weather: {weather}</p>
                    <p>Notes: {notes}</p>
                    <p>Reference: <a href={reference} target='_blank' rel="noreferrer">{reference}</a></p>
                    <p>Social media link: {social_reference}</p>
                </section>
                <section className='hike-detail-buttons'>
                    <Link
                        to={`/user/${this.props.match.params.userId}/hikes/${this.props.match.params.hikeId}/edit`}
                    >
                        Edit
                    </Link>
                    <div
                        className='delete-hike-button'
                        onClick={this.handleDeleteHike}
                    >
                        Delete
                    </div>
                </section>
                <section className='return-link'>
                    <Link to='/user/1234/hikes'>
                        <p>Return to Hikes Log</p>
                    </Link>
                </section>
            </div>
        )

    }

}

export default HikeDetail;