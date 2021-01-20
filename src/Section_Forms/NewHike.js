import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewHike.css';
import HikesApiService from '../services/hikes-api-service';

class NewHike extends Component {

    handleNewHikeFormSubmission = event => {
        event.preventDefault();

        const { name, distance, time, elevation, weather, notes, reference, steps} = event.target;
        
        HikesApiService.logNewHike({
            name: name.value,
            date: '2019-11-08T00:00:00.000Z',
            distance: distance.value,
            time: time.value,
            elevation: elevation.value,
            weather: weather.value,
            notes: notes.value,
            reference: reference.value,
            social_reference: 'http://insta.dummy.com',
            steps: steps.value,
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
                            <label htmlFor='hike-date'>Date (day / month / year):</label>{' '}
                            <input type="number" name="date-day" className="date-day"  placeholder="01" min="1" max="31" /> {' / '}
                            <input type="number" name="date-month" id="date-month" placeholder="01" min="1" max="12" /> {' / '}
                            <input type="number" name="date-year" className="date-year" placeholder="2017" min="1900" max="2021" /> {' '}
                        </section>
                    </section>

                    <section className='hike-form-supersection'>
                        <p>OPTIONAL info:</p>
                        <section className='hike-form-section'>
                            <label htmlFor='distance'>Distance (miles):</label>{' '}
                            <input type="number" name='distance' placeholder={10} />
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='time'>Time (hours):</label>{' '}
                            <input type="number" name='time' placeholder={4} />
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='elevation'>Total elevation change (feet):</label>{' '}
                            <input type="number" name='elevation' placeholder={2000} />
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='steps'>Total steps taken:</label>{' '}
                            <input type="number" name='steps' placeholder={20000} />
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='weather'>Weather:</label>{' '}
                            <select name='weather' id='weather'>
                            <option value='sun'>Sun</option>
                            <option value='cloudy'>Clouds</option>
                            <option value='rain'>Rain</option>
                            <option value='snow'>Snow</option>
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