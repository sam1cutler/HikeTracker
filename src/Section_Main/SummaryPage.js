import React, { Component } from 'react';
import './SummaryPage.css';
import HikesContext from '../HikesContext';
import HikesApiService from '../services/hikes-api-service';

class SummaryPage extends Component {

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

    generateSummaryData = hikes => {
        //console.log('About to generate summary data.');
        //console.log(hikes)
        // Initialize desired values
        const totalNumber = hikes.length;
        let totalDistance = 0;
        let totalElevation = 0;
        let totalTime = 0;
        let totalSteps = 0;

        for (let i=0; i<hikes.length; i++) {
            const activeHike = hikes[i]
            //console.log(activeHike)
            //console.log(hikes[i])
            totalDistance += activeHike.distance;
            totalElevation += activeHike.elevation;
            totalTime += activeHike.time;
            totalSteps += activeHike.steps;
        }

        return {
            totalNumber: totalNumber.toLocaleString(),
            totalDistance: totalDistance.toLocaleString(),
            totalElevation: totalElevation.toLocaleString(),
            totalTime: totalTime.toLocaleString(),
            totalSteps: totalSteps.toLocaleString(),
        }
    }

    renderSummaryData = summaryData => {
        //console.log('Attempting to render it all nicely.')
        if (summaryData.totalNumber < 2) {
            return (
                <p>Log more hikes to get a summary of your total hiking activity!</p>
            )
        } else {
            return (
                <div className='summary-data-container'>
                    <p>You've logged a total of</p>
                    <p><b>{summaryData.totalNumber}</b> hikes,</p>
                    <p>👣 covering <b>{summaryData.totalDistance}</b> miles and <b>{summaryData.totalSteps}</b> steps, 👣</p>
                    <p>⏱ taking <b>{summaryData.totalTime}</b> hours, ⏱</p>
                    <p>🏔 and traversing <b>{summaryData.totalElevation}</b> feet of elevation! 🏔</p>
                </div>
            )
        }
    }

    render() {

        const summaryData = this.generateSummaryData(this.context.hikes);

        const summaryDataOutput = this.renderSummaryData(summaryData);

        return (
            <div className='summary-wrapper'>
                <h2>Hike Activity Summary</h2>
                {summaryDataOutput}
            </div>
        )

    }

}

export default SummaryPage;