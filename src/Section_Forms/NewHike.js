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
        //console.log('New hike form submitted.')

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
        
        //console.log(newHikeInfo);

        // replace any un-filled, optional fields with 'null' for DB submission
        for (const [key, value] of Object.entries(newHikeInfo)) {
            //console.log(key);
            //console.log(value);
            if (value === '') {
                newHikeInfo[key] = null;
            }
        }

        //console.log(newHikeInfo);
        
        HikesApiService.logNewHike(newHikeInfo)
            .then( () => {
                //console.log('New hike was submitted.')
                const { history } = this.props
                history.push('/hikes')
            })

        
    }

    render() {

        return (
            <div>
                <form 
                    className='new-hike-entry'
                    onSubmit={this.handleNewHikeFormSubmission}
                >
                    <h2>Log a new hike</h2>
                    <section className='hike-form-supersection'>
                        <p>REQUIRED info:</p>
                        <section className='hike-form-section'>
                            <label htmlFor='name'>Hike name:</label>{' '}
                            <input type="text" name='name' placeholder='Mailbox Peak' required />
                        </section>
                        <section className='hike-form-section'>
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
                        </section>
                    </section>

                    <section className='hike-form-supersection'>
                        <p>OPTIONAL info:</p>
                        <section className='hike-form-section'>
                            <label htmlFor='distance'>Distance (miles):</label>{' '}
                            <input type="number" name='distance' placeholder={10} step="any"/>
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='time'>Time (hours):</label>{' '}
                            <input type="number" name='time' placeholder={4} step="any"/>
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='elevation'>Total elevation change (feet):</label>{' '}
                            <input type="number" name='elevation' placeholder={2000} />
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='rating'>Rating out of 5:</label>{' '}
                            <input type="number" name='rating' placeholder={3} min={1} max={5}/>
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='steps'>Total steps taken:</label>{' '}
                            <input type="number" name='steps' placeholder={20000} />
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='weather'>Weather:</label>{' '}
                            <select name='weather' id='weather'>
                            <option value='Sun'>Sun</option>
                            <option value='Clouds'>Clouds</option>
                            <option value='Rain'>Rain</option>
                            <option value='Snow'>Snow</option>
                            </select>
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='notes'>Notes:</label>{' '}
                            <textarea id='notes' name='notes' rows='4' cols='50'>
                            </textarea>
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='reference'>Reference:</label>{' '}
                            <input type='text' name='reference' size={50} placeholder='https://www.wta.org/go-hiking/hikes/mailbox-peak' />
                        </section>
                    </section>

                    <section className='hike-form-section buttons-box'>
                        <button type='submit'>Submit hike</button>
                        {' '}
                        <button type='reset'>Reset form</button>
                        <Link to='/hikes'>
                            <div className='return-link'>
                                <p>Return to Hikes Log</p>
                            </div>
                        </Link>
                    </section>
                </form>
            </div>
        )

    }

}

export default NewHike;