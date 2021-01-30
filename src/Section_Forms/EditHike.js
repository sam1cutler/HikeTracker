import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import './EditHike.css';
import HikesContext from '../HikesContext';
import HikesApiService from '../services/hikes-api-service';

class EditHike extends Component {

    state = {
        date: moment(),
        focused: false,
    }

    static contextType = HikesContext;

    handleEditHikeFormSubmission = (event) => {
        event.preventDefault();

        const { name, distance, time, elevation, steps, rating, weather, notes, reference } = event.target;

        const editedHikeInfo = {
            name: name.value,
            date: this.state.date.utc().format('DD-MMM-YYYY'),
            distance: distance.value,
            time: time.value,
            elevation: elevation.value,
            rating: rating.value,
            steps: steps.value,
            weather: weather.value,
            notes: notes.value,
            reference: reference.value,
        };

        // replace any un-filled, optional fields with 'null' for DB submission
        for (const [key, value] of Object.entries(editedHikeInfo)) {
            if (value === '') {
                editedHikeInfo[key] = null;
            }
        }

        HikesApiService.editHike(
            this.props.match.params.hikeId,
            editedHikeInfo
        )
            .then( res => {
                const { history } = this.props
                history.push(`/hikes/${this.props.match.params.hikeId}/detail`)
            })
    }

    componentDidMount() {
        HikesApiService.getHikeById(this.props.match.params.hikeId)
            .then( hikeInfo => {
                //console.log(hikeInfo)
                this.context.setActiveHike(hikeInfo)
                this.setState({
                    date: moment(hikeInfo.date)
                })
            })
    }

    render() {

        const activeHike = this.context.activeHike;
        
        const { name, distance, time, elevation, rating, steps, weather, notes, reference } = activeHike || '';

        return (
            <div>
                <form 
                    className='edit-hike-entry'
                    onSubmit={this.handleEditHikeFormSubmission}
                >
                        <h2>Update any of the info for this hike:</h2>
                        <div className='hike-form-supersection form-inputs'>
                            <div className='hike-form-section'>
                                <label htmlFor='name'>Hike name:</label>{' '}
                                <input type="text" name='name' id='name' defaultValue={name} />
                            </div>
                            <div className='hike-form-section'>
                                <div className='date-picker-container'>
                                    <SingleDatePicker
                                        date={this.state.date} // momentPropTypes.momentObj or null
                                        onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                                        focused={this.state.focused} // PropTypes.bool
                                        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                        id="new-hike-date-picker" // PropTypes.string.isRequired,
                                        numberOfMonths={1}
                                        isOutsideRange={() => {}}
                                    />
                                </div>
                            </div>
                            <div className='hike-form-section'>
                                <label htmlFor='distance'>Distance (miles):</label>{' '}
                                <input type="number" name='distance' id='distance' defaultValue={distance} step="any"/>
                            </div>
                            <div className='hike-form-section'>
                                <label htmlFor='time'>Time (hours):</label>{' '}
                                <input type="number" name='time' id='time' defaultValue={time} step="any"/>
                            </div>
                            <div className='hike-form-section'>
                                <label htmlFor='elevation'>Total elevation change (feet):</label>{' '}
                                <input type="number" name='elevation' id='elevation' defaultValue={elevation} step="any"/>
                            </div>
                            <div className='hike-form-section'>
                                <label htmlFor='rating'>Rating out of 5:</label>{' '}
                                <input type="number" name='rating' id='rating' defaultValue={rating} min={1} max={5}/>
                            </div>
                            <div className='hike-form-section'>
                                <label htmlFor='steps'>Total steps taken:</label>{' '}
                                <input type="number" name='steps' id='steps' defaultValue={steps} />
                            </div>
                            <div className='hike-form-section'>
                                <label htmlFor='weather'>Weather:</label>{' '}
                                <select name='weather' id='weather' defaultValue={weather}>
                                    <option value='Sun'>Sun</option>
                                    <option value='Clouds'>Clouds</option>
                                    <option value='Rain'>Rain</option>
                                    <option value='Snow'>Snow</option>
                                </select>
                            </div>
                            <div className='hike-form-section notes-input-section'>
                                <label htmlFor='notes'>Notes: </label>{' '}
                                <textarea id='notes' name='notes' rows='4' defaultValue={notes}>
                                </textarea>
                            </div>
                            <div className='hike-form-section hike-reference-section'>
                                <label htmlFor='reference'>Reference:</label>{' '}
                                <input type='text' name='reference' id='reference' defaultValue={reference} />
                            </div>
                        </div>
                        <div className='hike-form-supersection buttons-box'>
                            <div>
                                <button
                                    className='submit-button hike-tracker-button'
                                    type='submit'
                                >
                                    Submit updated hike info
                                </button>
                                <Link
                                    to={`/hikes/${this.props.match.params.hikeId}/detail`}
                                >
                                    <div className='cancel-button hike-tracker-button'>
                                        Cancel edit
                                    </div>
                                </Link>
                            </div>
                            <Link to='/hikes' className='return-link'>
                                <p>Return to Hikes Log</p>
                            </Link>
                    </div>  
                </form>
            </div>
        )
    }
}

export default EditHike;