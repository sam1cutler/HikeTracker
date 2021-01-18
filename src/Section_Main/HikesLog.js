import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './HikesLog.css';
//import STORE from '../store';
import HikeCard from './HikeCard';
import HikesContext from '../HikesContext';

class HikesLog extends Component {

    /*
    constructor(props) {
        super(props);
        this.state = {
          hikesList: []
        };
    }
    */
    static contextType = HikesContext;
    

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