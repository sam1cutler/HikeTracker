import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EditHike.css';
import HikesContext from '../HikesContext';

class EditHike extends Component {

    static contextType = HikesContext;

    handleEditHike = (event) => {
        event.preventDefault();
        console.log('User wants to edit a hike.')
    }

    render() {

        const activeHike = this.context.hikes.find(hike => 
            hike.id.toString() === this.props.match.params.hikeId);
        
        const { name, distance, time, elevation, weather, notes, reference, steps } = activeHike || '';

        return (
            <div>
                <form id='edit-hike-entry'>

                    <section className='hike-form-supersection'>
                        <h2>Update any of the info for this hike:</h2>
                        <section className='hike-form-section'>
                            <label htmlFor='hike-name'>Hike name:</label>{' '}
                            <input type="text" name='hike-name' defaultValue={name} />
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='hike-date'>Date (day / month / year):</label>{' '}
                            <input type="number" name="date-day" className="date-day"  placeholder="01" min="1" max="31" required="" /> {' / '}
                            <input type="number" name="date-month" id="date-month" placeholder="01" min="1" max="12" required="" /> {' / '}
                            <input type="number" name="date-year" className="date-year" placeholder="2017" min="1900" max="2021" required="" /> {' '}
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='distance'>Distance (miles):</label>{' '}
                            <input type="number" name='distance' defaultValue={distance}/>
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='time'>Time (hours):</label>{' '}
                            <input type="number" name='time' defaultValue={time}/>
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='elevation'>Total elevation change (feet):</label>{' '}
                            <input type="number" name='elevation' defaultValue={elevation} />
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='hike-weather'>Weather:</label>{' '}
                            <select name='hike-weather' id='hike-weather' defaultValue={weather}>
                            <option value='sun'>Sun</option>
                            <option value='cloudy'>Clouds</option>
                            <option value='rain'>Rain</option>
                            <option value='snow'>Snow</option>
                            </select>
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='hike-notes'>Notes:</label>{' '}
                            <textarea id='hike-notes' name='hike-notes' rows='4' cols='50' defaultValue={notes}>
                            </textarea>
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='hike-reference'>Reference:</label>{' '}
                            <input type='text' name='hike-reference' size={50} defaultValue={reference} />
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='hike-steps'>Total steps taken:</label>{' '}
                            <input type="number" name='hike-steps' defaultValue={steps} />
                        </section>
                        <div
                            className='submit-button'
                            onClick={this.handleEditHike}
                        >
                            Submit updated hike info
                        </div>
                        <Link to='/user/1234/hikes' className='return-link'>
                            <p>Return to Hikes Log</p>
                        </Link>
                    </section>  
                </form>
            </div>
        )

    }

}

export default EditHike;