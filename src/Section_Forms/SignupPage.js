import React, { Component } from 'react';
import './SignupPage.css';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

class SignupPage extends Component {
    
    handleSignupSubmit = event => {
        event.preventDefault()
        console.log('User wants to register new account.')

        const { email, password } = event.target;

        console.log(email)
        console.log(password)

        
        AuthApiService.postUser({
            email: email.value,
            password: password.value
        })
            .then( () => {
                console.log('User POST request did something.');
                console.log('Attempting to log in after registration.')
                AuthApiService.postLogin({
                    email: email.value,
                    password: password.value
                })
                    .then(res => {
                        TokenService.saveAuthToken(res.authToken)
                        
                        // clear form fields
                        email.value = '';
                        password.value = '';

                        // send to HikesLog home page
                        const { history } = this.props
                        history.push('/hikes')

                    })
                    .catch(res => {
                        console.log('There was an error in logging in after registration.')
                    })
            })
            .catch(res => {
                // DISPLAY TO USER eventually...
                console.log({ error: res.error })
            })
            
    }

    render() {

        return (
            <div className='signup-form-wrapper'>
                <form
                    id='signup-form'
                    onSubmit={this.handleSignupSubmit}
                >
                    <div className='signup-form-wrapper'>
                        <h2>Sign up for HikeTracker:</h2>
                        <section className='signup-form-section'>
                            <label htmlFor='email'>Email:</label>{' '}
                            <input type="email" name='email' required />
                        </section>
                        <section className='signup-form-section'>
                            <label htmlFor='password'>Password:</label>{' '}
                            <input type="password" name='password' required />
                        </section>
                        <section className='signup-form-section'>
                            <button type='submit'>Sign up</button>
                        </section>
                    </div>
                </form>
            </div>
        )

    }

}

export default SignupPage;