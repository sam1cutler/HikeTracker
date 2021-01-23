import config from '../config';
import TokenService from './token-service';

const HikesApiService = {
    getHikes() {
        return fetch(`${config.API_ENDPOINT}/hikes`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getHikeById(hikeId) {
        //console.log('Submiting fetch request for this hike info.')
        return fetch(`${config.API_ENDPOINT}/hikes/${hikeId}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },
    logNewHike(newHike) {
        //console.log('In HikesApiService, about to post a new hike.')
        
        return fetch(`${config.API_ENDPOINT}/hikes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newHike),
        })
            .then(res => {
                //console.log('In HikesApiService, got response from server for POST newHike request:')
                if (!res.ok) {
                    throw new Error('Something went wrong with note delete request')
                }
            })
    },
    deleteHike(hikeId) {
        //console.log('In HikesApiService, about to delete a hike.')
        return fetch(`${config.API_ENDPOINT}/hikes/${hikeId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => {

            })
    },
    editHike(hikeId, editedHikeInfo) {
        //console.log('In HikesApiService, about to edit a hike.')
        return fetch(`${config.API_ENDPOINT}/hikes/${hikeId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(editedHikeInfo),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong with edit note request.')
                }
            })
            .catch(error => {
                //console.log(error)
            });
    },
}

export default HikesApiService;