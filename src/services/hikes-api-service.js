import config from '../config';

const HikesApiService = {
    getHikes() {
        return fetch(`${config.API_ENDPOINT}/hikes`)
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
}

export default HikesApiService;