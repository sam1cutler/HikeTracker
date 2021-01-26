import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HikeDetail.css';
import HikeCard from './HikeCard';
import HikesContext from '../HikesContext';
import HikesApiService from '../services/hikes-api-service';
// import PropTypes from 'prop-types';

class HikeDetail extends Component {

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = HikesContext;

    handleDeleteHike = (event) => {
        event.preventDefault();
        //console.log('User wants to delete a hike.')

        const hikeId = this.props.match.params.hikeId;
        HikesApiService.deleteHike(hikeId)
            .then( () => {
                //console.log('Got response from server after delete request.')
                const { history } = this.props
                history.push(`/hikes`)
            })
            .catch(error => {
                //console.log(error)
            })

    }

    componentDidMount() {
        HikesApiService.getHikeById(this.props.match.params.hikeId)
            .then( hikeInfo => {
                //console.log(hikeInfo)
                this.context.setActiveHike(hikeInfo)
            })
    }

    render() {
        
        const activeHike = this.context.activeHike;
        
        const { weather, notes, reference } = activeHike || '';

        return (
            <div className='hike-detail-wrapper'>
                <HikeCard
                    cardInfo={activeHike}
                />
                <section className='hike-details-section'>
                    <p>Weather: {weather}</p>
                    <p>Notes: {notes}</p>
                    <p>Reference: <a href={reference} target='_blank' rel="noreferrer">{reference}</a></p>
                </section>
                <section className='hike-detail-buttons'>
                    <Link
                        to={`/hikes/${this.props.match.params.hikeId}/edit`}
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
                    <Link to='/hikes'>
                        <p>Return to Hikes Log</p>
                    </Link>
                </section>
            </div>
        )

    }

}

export default HikeDetail;