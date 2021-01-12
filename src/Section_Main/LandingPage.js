import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {

    render() {

        return (
            <div>
                <section className='landing-info-block'>
                    <h2>Track your hikes!</h2>
                    <p>The simplest use for this app is to compile a clean, concise record of your hikes - when you hiked what trails.</p>
                    <p className='screenshot-placeholder'><i>[Screenshot of a sparsely filled-in hike log.]</i></p>
                </section>
                
                <section className='landing-info-block'>
                    <h2>Record additional hike data</h2>
                    <p>If you prefer a more data-rich history of your hikes, easily fill in additional information about your hikes, including:</p>
                    <ul>
                        <li>Total mileage</li>
                        <li>Total elevation change</li>
                        <li>Time</li>
                        <li>Weather</li>
                        <li>Notes about the hike</li>
                        <li>Link to a reference with info about the hike</li>
                        <li>And more!</li>
                    </ul>
                    <p className='screenshot-placeholder'><i>[Screenshot of detailed hike page with full complement of info.</i></p>
                </section>

                <section className='landing-info-block'>
                    <h2>View concise summaries of your activity</h2>
                    <p>Easily access visual summaries of your hiking activity by year or month.</p>
                    <p className='screenshot-placeholder'><i>[Screenshot of visual summary]</i></p>
                </section>

                <section className='landing-info-block'>
                    <h2>Analyze your hiking activity</h2>
                    <p>The more information you put into your HikeTracker logged info, the richer the analysis you can do.</p>
                    <p>Determine your average pace over time, the relationship between the elevation change of your hike and the pace you sustain, and more.</p>
                    <p className='screenshot-placeholder'><i>[Screenshot of some kinda analysis]</i></p>
                </section>
            </div>
        )

    }

}

export default LandingPage;