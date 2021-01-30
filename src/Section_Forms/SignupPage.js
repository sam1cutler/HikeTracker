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
        
        // clear error
        this.setState({
            error: null,
        })

        const { email, password, passwordRepeat } = event.target;

        // Check that messages match
        if (password.value !== passwordRepeat.value) {
            this.setState({
                error: 'Passwords do not match.'
            })
            email.value = '';
            password.value = '';
            passwordRepeat.value = '';
        } else {
            AuthApiService.postUser({
                email: email.value,
                password: password.value
            })
                .then( () => {
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
                            this.setState({
                                error: res.error
                            });
                        })
                })
                .catch(res => {
                    this.setState({
                        error: res.error
                    });
                })
        }    
    }

    generateErrorMessage = () => {
        if (this.state.error) {
            return (
                <div className='error-message'>
                    {this.state.error}
                </div>
            )
        }
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
                        {errorMessage}
                        <div className='signup-form-section'>
                            <label htmlFor='email'>Email:</label>{' '}
                            <input type="email" id='email' name='email' required />
                        </div>
                        <div className='signup-form-section'>
                            <label htmlFor='password'>Password:</label>{' '}
                            <input type="password" id='password' name='password' required />
                        </div>
                        <div className='signup-form-section'>
                            <label htmlFor='passwordRepeat'>Repeat password:</label>{' '}
                            <input type="password" id='passwordRepeat' name='passwordRepeat' required />
                        </div>
                        <div className='password-guidance'>
                            <p>Your password must be at least 8 characters in length and include at least one upper case and one lower case letter, number, and special character ( ! @ # $ % ^ & ).</p>
                        </div>
                        <div className='signup-form-section'>
                            <button type='submit' className='hike-tracker-button'>Sign up</button>
                        </div>
                    </div>
                </form>
            </div>
        )

    }

}

export default SignupPage;