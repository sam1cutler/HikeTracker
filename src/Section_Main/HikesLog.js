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
            })
      }

    render() {

        const hikesList = this.context.hikes;
        const currentUser = this.context.loggedInUser;
        
        const cardList = hikesList.map( (activeHike, i) => {
            // console.log('In cardList loop in HikesLog.js, and active hike is:')
            // console.log(activeHike)
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
                <h2>Your hikes:</h2>
                {cardList}
            </div>
        )

    }

}

export default HikesLog;