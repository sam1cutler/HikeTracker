import React, { Component } from 'react';
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
                // console.log('And now, the updated state from API query:')
                // console.log(this.state.hikes)
            })
      }

    render() {

        const hikesList = this.context.hikes;
        // console.log('Here is the hikesList in HikesLog.js, populated from context:')
        // console.log(hikesList)

        const cardList = hikesList.map( (activeHike, i) => {
            // console.log('In cardList loop in HikesLog.js, and active hike is:')
            // console.log(activeHike)
            return (
                <HikeCard
                    key={i}
                    cardInfo={activeHike}
                />
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