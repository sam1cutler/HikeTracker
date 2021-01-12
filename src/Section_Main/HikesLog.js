import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './HikesLog.css';
import STORE from '../store';
import HikeCard from './HikeCard';

class HikesLog extends Component {

    constructor(props) {
        super(props);
        this.state = {
          filterOptions: {
              a: 'b',
              c: 'd'
          },
          hikes: STORE.hikes
        };
    }

    render() {

        const hikesInfo = this.state.hikes;

        const cardList = hikesInfo.map( (activeHike, i) => {
            
            return (
                <HikeCard
                    key={i}
                    cardInfo={activeHike}
                />
            )

        })

        return (
            <div>
                <h2>Your hikes:</h2>
                {cardList}
            </div>
        )

    }

}

export default HikesLog;