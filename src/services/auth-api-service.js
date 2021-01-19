import config from '../config';

const AuthApiService = {
    postLogin(credentials) {
        console.log('Running AuthApiService.postLogin()')
        console.log(credentials)

        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
            .then(res => {
                console.log('In AuthApiService, and this is what we got from the server:')
                console.log(res)
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
    },
    postUser(user) {
        console.log('Running AuthApiService.postUser()')
    },
};

export default AuthApiService;