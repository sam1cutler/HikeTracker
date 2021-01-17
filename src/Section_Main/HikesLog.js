import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './HikesLog.css';
import HikesApiService from '../services/hikes-service';
//import STORE from '../store';
import HikeCard from './HikeCard';

class HikesLog extends Component {

    constructor(props) {
        super(props);
        this.state = {
          hikesList: []
        };
    }

    componentDidMount() {
        console.log('First, the starting state:')
        console.log(this.state.hikesList)
        HikesApiService.getHikes()
            .then( hikesResult => {
                console.log(hikesResult)
                this.setState({
                    hikesList: hikesResult
                })
                console.log('And now, the updated state from API query:')
                console.log(this.state.hikesList)
            })
    }

    render() {

        const hikesInfo = this.state.hikesList;

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