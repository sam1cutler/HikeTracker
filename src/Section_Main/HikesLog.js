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
                console.log(hikesResult)
                this.context.setHikes(
                    hikesResult
                )
            });
        
        this.context.clearActiveHike();
    }

    render() {

        const hikesList = this.context.hikes;
        
        const cardList = hikesList.map( (activeHike, i) => {
            return (
                <Link
                    key={i}
                    to={`/hikes/${activeHike.id}/detail`}
                >
                    <HikeCard
                        cardInfo={activeHike}
                    />
                </Link>
            )
        })

        return (
            <div className='the-log'>
                {cardList}
            </div>
        )

    }

}

export default HikesLog;