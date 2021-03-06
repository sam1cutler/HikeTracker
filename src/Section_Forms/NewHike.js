import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import './NewHike.css';
import HikesApiService from '../services/hikes-api-service';

class NewHike extends Component {

    state = {
        date: moment(),
        focused: false,
    }

    handleNewHikeFormSubmission = event => {
        event.preventDefault();

        const { name, distance, time, elevation, steps, rating, weather, notes, reference } = event.target;
        const newHikeInfo = {
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
        for (const [key, value] of Object.entries(newHikeInfo)) {
            if (value === '') {
                newHikeInfo[key] = null;
            }
        }
        
        HikesApiService.logNewHike(newHikeInfo)
            .then( () => {
                const { history } = this.props
                history.push('/hikes')
            })
    }

    render() {

        return (
            <div className='new-hike-form-wrapper'>
                <form 
                    className='new-hike-entry'
                    onSubmit={this.handleNewHikeFormSubmission}
                >
                    <h2>Log a new hike</h2>
                    <section className='hike-form-supersection required-inputs'>
                        <h3>Required info:</h3>
                        <div className='hike-form-section'>
                            <label htmlFor='name'>Hike name:</label>{' '}
                            <input type="text" name='name' id='name' placeholder='Mailbox Peak' required />
                        </div>
                        <div className='hike-form-section date-picker-container'>
                            <label htmlFor='new-hike-date-picker'>Date: </label>
                
                                
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
                    </section>

                    <section className='hike-form-supersection optional-inputs'>
                        <h3>Optional info:</h3>
                        <div className='hike-form-section'>
                            <label htmlFor='distance'>Distance (miles):</label>{' '}
                            <input type="number" name='distance' id='distance' placeholder={10} step="any"/>
                        </div>
                        <div className='hike-form-section'>
                            <label htmlFor='time'>Time (hours):</label>{' '}
                            <input type="number" name='time' id='time' placeholder={4} step="any"/>
                        </div>
                        <div className='hike-form-section'>
                            <label htmlFor='elevation'>Total elevation change (feet):</label>{' '}
                            <input type="number" name='elevation' id='elevation' placeholder={2000} />
                        </div>
                        <div className='hike-form-section'>
                            <label htmlFor='rating'>Rating out of 5 (how much did you enjoy the hike?):</label>{' '}
                            <input type="number" name='rating' id='rating' placeholder={3} min={1} max={5}/>
                        </div>
                        <div className='hike-form-section'>
                            <label htmlFor='steps'>Total steps taken:</label>{' '}
                            <input type="number" name='steps' id='steps' placeholder={20000} />
                        </div>
                        <div className='hike-form-section'>
                            <label htmlFor='weather'>Weather:</label>{' '}
                            <select name='weather' id='weather'>
                            <option value='Sun'>Sun</option>
                            <option value='Clouds'>Clouds</option>
                            <option value='Rain'>Rain</option>
                            <option value='Snow'>Snow</option>
                            </select>
                        </div>
                        <div className='hike-form-section'>
                            <label htmlFor='notes'>Notes:</label>{' '}
                            <textarea name='notes' id='notes' rows='4'>
                            </textarea>
                        </div>
                        <div className='hike-form-section hike-reference-section'>
                            <label htmlFor='reference'>Reference:</label>{' '}
                            <input type='text' name='reference' id='reference' placeholder='https://www.wta.org/go-hiking/hikes/mailbox-peak' />
                        </div>
                    </section>

                    <div className='hike-form-supersection buttons-box'>
                        <button type='submit' className='hike-tracker-button'>Submit hike</button>
                        {' '}
                        {/* <button type='reset'>Reset form</button> */}
                        <Link to='/hikes'>
                            <div className='return-link'>
                                <p>Return to Hikes Log</p>
                            </div>
                        </Link>
                    </div>
                </form>
            </div>
        )

    }

}

export default NewHike;