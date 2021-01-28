import React, { Component } from 'react';
import './SignupPage.css';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

class SignupPage extends Component {

    state = {
        error: null,
    }
    
    handleSignupSubmit = event => {
        event.preventDefault()
        //console.log('User wants to register new account.')

        const { email, password, passwordRepeat } = event.target;

        //console.log(email)
        //console.log(password)

        // Check that messages match
        if (password !== passwordRepeat) {
            this.setState({
                error: 'Passwords do not match.'
            })
        } else {
            AuthApiService.postUser({
                email: email.value,
                password: password.value
            })
                .then( () => {
                    //console.log('User POST request did something.');
                    //console.log('Attempting to log in after registration.')
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
                            console.log(res.error)
                            this.setState({
                                error: res.error
                            });
                        })
                })
                .catch(res => {
                    // DISPLAY TO USER eventually...
                    console.log('There was an error in creating the new user.')
                    console.log(res.error)
                    this.setState({
                        error: res.error
                    });
                })
        }

        
        
            
    }

    generateErrorMessage = () => {
        return (this.state.error)
            ? this.state.error
            : null;
    }

    render() {

        const errorMessage = this.generateErrorMessage();

        return (
            <div className='signup-form-wrapper'>
                <form
                    id='signup-form'
                    onSubmit={this.handleSignupSubmit}
                >
                    <div className='signup-form-fields-container'>
                        <h2>Sign up for HikeTracker:</h2>
                        <div className='error-message'>
                            {errorMessage}
                        </div>
                        <section className='signup-form-section'>
                            <label htmlFor='email'>Email:</label>{' '}
                            <input type="email" name='email' required />
                        </section>
                        <section className='signup-form-section'>
                            <label htmlFor='password'>Password:</label>{' '}
                            <input type="password" name='password' required />
                        </section>
                        <section className='signup-form-section'>
                            <label htmlFor='passwordRepeat'>Repeat password:</label>{' '}
                            <input type="password" name='passwordRepeat' required />
                        </section>
                        <section className='password-guidance'>
                            <p>Your password must be at least 8 characters in length and include at least one upper case and one lower case letter, number, and special character ( ! @ # $ % ^ & ).</p>
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