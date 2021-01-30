import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HikeDetail.css';
import HikeCard from './HikeCard';
import HikesContext from '../HikesContext';
import HikesApiService from '../services/hikes-api-service';

class HikeDetail extends Component {

    static defaultProps = {
        match: {
            params: {}
        }
    }

    state = {
        error: null,
        weatherIcons: {
            Sun: '☀️',
            Rain: '🌧',
            Clouds: '☁️',
            Snow: '❄️'
        }
    }

    static contextType = HikesContext;

    handleDeleteHike = (event) => {
        event.preventDefault();

        const hikeId = this.props.match.params.hikeId;
        HikesApiService.deleteHike(hikeId)
            .then( () => {
                const { history } = this.props
                history.push(`/hikes`)
            })
            .catch(error => {
                this.setState({
                    error
                })
            })

    }

    componentDidMount() {
        HikesApiService.getHikeById(this.props.match.params.hikeId)
            .then( hikeInfo => {
                this.context.setActiveHike(hikeInfo)
            })
    }

    generateErrorMessage = () => {
        if (this.state.error) {
            return (
                <div className='error-message'>
                    {this.state.error}
                </div>
            )
        }
    }

    renderNote = (note) => {
        return (note)
            ? note
            : '--'
    }

    renderReference = (reference) => {
        return (reference)
            ? <a href={reference} target='_blank' rel="noreferrer">{reference}</a>
            : '--'
    }

    render() {
        
        const errorMessage = this.generateErrorMessage();

        const activeHike = this.context.activeHike;
        
        const { weather, notes, reference } = activeHike || '';

        return (
            <div className='hike-detail-wrapper'>
                <div className='detail-page-card-container'>
                <HikeCard
                    cardInfo={activeHike}
                />
                </div>
                <div className='hike-details-section hike-details-content'>
                    <p><b>Weather:</b> {weather} {this.state.weatherIcons[weather]}</p>
                    <p><b>Notes:</b> {this.renderNote(notes)}</p>
                    <p><b>Reference:</b> {this.renderReference(reference)}</p>
                </div>
                <div className='hike-details-section hike-detail-options'>
                    <div className='hike-detail-buttons'>
                        {errorMessage}
                        <div className='hike-detail-ind-button'>
                            <Link
                                to={`/hikes/${this.props.match.params.hikeId}/edit`}
                            >
                                <div className='hike-tracker-button'>
                                Edit
                                </div>
                            </Link>
                        </div>
                        <div className='hike-detail-ind-button'>
                            <button 
                                type='button'
                                className='hike-tracker-button hike-detail-ind-button'
                                onClick={this.handleDeleteHike}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className='return-link'>
                        <Link to='/hikes'>
                            <p>Return to Hikes Log</p>
                        </Link>
                    </div>
                </div>
            </div>
        )

    }

}

export default HikeDetail;