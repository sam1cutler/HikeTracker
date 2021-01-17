import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HikeDetail.css';
import STORE from '../store';

class HikeDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
          hikes: STORE.hikes
        };
    }

    render() {

        const currentHike = this.state.hikes.find(hike => 
            hike.id === this.props.match.params.hikeId);
        
        const { name, date, distance, time, elevation, weather, notes, reference, social_reference, steps } = currentHike;

        return (
            <div className='hike-detail-wrapper'>
                <h2>{name}</h2>
                <section className='hike-details-section'>
                    <p>{date}</p>
                    <p>{distance} miles</p>
                    <p>{time} hours</p>
                    <p>{elevation} feet</p>
                </section>
                <section className='hike-details-section'>
                    <p>Weather: {weather}</p>
                    <p>Notes: {notes}</p>
                    <p>Reference: <a href={reference} target='_blank' rel="noreferrer">{reference}</a></p>
                </section>
                <section className='hike-card-buttons'>
                    <button>Edit</button>{' '}
                    <button>Delete</button>
                </section>
                <section>
                    <Link to='/user/1234/hikes'>
                        <i>Return to Hikes Log</i>
                    </Link>
                </section>
            </div>
        )

    }

}

export default HikeDetail;