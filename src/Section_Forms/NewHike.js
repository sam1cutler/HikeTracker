import React, { Component } from 'react';
import './NewHike.css';

class NewHike extends Component {

    render() {

        return (
            <div>
                <form id='new-hike-entry'>

                    <section className='hike-form-supersection'>
                        <p>REQUIRED info:</p>
                        <section className='hike-form-section'>
                            <label htmlFor='hike-name'>Hike name:</label>{' '}
                            <input type="text" name='hike-name' placeholder='Mailbox Peak' required />
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='hike-date'>Date (day / month / year):</label>{' '}
                            <input type="number" name="date-day" className="date-day"  placeholder="01" min="1" max="31" required="" /> {' / '}
                            <input type="number" name="date-month" id="date-month" placeholder="01" min="1" max="12" required="" /> {' / '}
                            <input type="number" name="date-year" className="date-year" placeholder="2017" min="1900" max="2021" required="" /> {' '}
                        </section>
                    </section>

                    <section className='hike-form-supersection'>
                        <p>OPTIONAL info:</p>
                        <section className='hike-form-section'>
                            <label htmlFor='hike-distance'>Distance (miles):</label>{' '}
                            <input type="number" name='hike-distance' placeholder={10} />
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='hike-time'>Time (hours):</label>{' '}
                            <input type="number" name='hike-time' placeholder={4} />
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='hike-elevation'>Total elevation change (feet):</label>{' '}
                            <input type="number" name='hike-elevation' placeholder={2000} />
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='hike-weather'>Weather:</label>{' '}
                            <select name='hike-weather' id='hike-weather'>
                            <option value='sun'>Sun</option>
                            <option value='cloudy'>Clouds</option>
                            <option value='rain'>Rain</option>
                            <option value='snow'>Snow</option>
                            </select>
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='hike-notes'>Notes:</label>{' '}
                            <textarea id='hike-notes' name='hike-notes' rows='4' cols='50'>
                            </textarea>
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='hike-reference'>Reference:</label>{' '}
                            <input type='text' name='hike-reference' size={50} placeholder='https://www.wta.org/go-hiking/hikes/mailbox-peak' />
                        </section>
                        <section className='hike-form-section'>
                            <label htmlFor='hike-steps'>Total steps taken:</label>{' '}
                            <input type="number" name='hike-steps' placeholder={20000} />
                        </section>
                    </section>

                    <section className='hike-form-section buttons-box'>
                        <button type='submit'>Submit hike</button>
                        {' '}
                        <button type='reset'>Reset form</button>
                    </section>
                </form>
            </div>
        )

    }

}

export default NewHike;