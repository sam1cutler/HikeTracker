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
        return fetch(`${config.API_ENDPOINT}/hikes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newHike),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong with note delete request')
                }
            })
    },
    deleteHike(hikeId) {
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
            });
    },
}

export default HikesApiService;