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
    }
}

export default HikesApiService;