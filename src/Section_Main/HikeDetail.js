import React, { Component } from 'react';
import './HikeDetail.css';

class HikeDetail extends Component {

    render() {

        return (
            <div className='hike-detail-wrapper'>
                <h2>Mailbox Peak</h2>
                <section className='hike-details-section'>
                    <p>10 July 2017</p>
                    <p>9.5 miles</p>
                    <p>3.5 hours</p>
                    <p>2,500 feet</p>
                </section>
                <section className='hike-details-section'>
                    <p>Weather: sunny</p>
                    <p>Notes: Arrived at 8 a.m. and there were still a decent number of spots available. Not too crowded on the way up, but passed a ton of people on the descent. Bluebird skies and amazing visibility from the top.</p>
                    <p>Reference: <a href='https://www.wta.org/go-hiking/hikes/mailbox-peak' target='_blank' rel="noreferrer">https://www.wta.org/go-hiking/hikes/mailbox-peak</a></p>
                </section>
                <section className='hike-card-buttons'>
                    <button>Edit</button>{' '}
                    <button>Delete</button>
                </section>
            </div>
        )

    }

}

export default HikeDetail;