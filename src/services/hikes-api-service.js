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
    logNewHike(newHike) {
        console.log('In HikesApiService, about to post a new hike.')
        
        return fetch(`${config.API_ENDPOINT}/hikes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newHike),
        })
            .then(res => {
                console.log('In HikesApiService, got response from server for POST newHike request:')
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
    }
}

export default HikesApiService;