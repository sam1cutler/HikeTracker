import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HikesLog.css';
import HikeCard from './HikeCard';
import HikesApiService from '../services/hikes-api-service';
import HikesContext from '../HikesContext';

class HikesLog extends Component {

    static contextType = HikesContext;
    
    componentDidMount() {
        HikesApiService.getHikes()
            .then( hikesResult => {
                //console.log(hikesResult)
                this.context.setHikes(
                    hikesResult
                )
            });
        
        this.context.clearActiveHike();
    }

    orderHikesList(hikesList) {
        //console.log('Attempting to order the hikeslist!')
        //console.log(hikesList);

        hikesList.sort(function(a, b) {
            const c = new Date(a.date);
            const d = new Date(b.date);
            return d-c;
        });
        //console.log(hikesList);
    }

    renderWelcome() {
        return (
            <div className='welcome-message'>
                <h2>Welcome to HikeTracker!</h2>
                <p>To get started,</p>
                <Link to={`/hikes/new-hike`}>
                    <p><i>log your first hike!</i></p>
                </Link>
            </div>
        )
    }

    renderHikesList(hikesList) {
        return hikesList.map( (activeHike, i) => {
            return (
                <Link
                    key={i}
                    to={`/hikes/${activeHike.id}/detail`}
                >
                    <HikeCard
                        cardInfo={activeHike}
                    />
                </Link>
            );
        });
    }

    render() {

        const hikesList = this.context.hikes;

        this.orderHikesList(hikesList);

        let hikesLogDisplay;

        if (hikesList.length === 0) {
            hikesLogDisplay = this.renderWelcome();
        } else {
            hikesLogDisplay = this.renderHikesList(hikesList);
        };

        return (
            <div className='the-log'>
                {hikesLogDisplay}
            </div>
        )

    }

}

export default HikesLog;