import React, { Component } from 'react';
import './LoginForm.css';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

class LoginForm extends Component {

    state = {
        error: null,
    }

    onLoginSuccess = () => {
        const { history } = this.props
        history.push(`/hikes`)
    }

    handleSubmitJwtAuth = event => {
        event.preventDefault();
        
        const { email, password } = event.target;

        AuthApiService.postLogin({
            email: email.value,
            password: password.value
        })
            // if server interaction works, will provide authToken in response
            .then(res => {
                //clear form values
                email.value = '';
                password.value = '';
                // save authToken in browser
                TokenService.saveAuthToken(res.authToken)
                // run onLoginSuccess fxn
                this.onLoginSuccess()
            })
            .catch(res => {
                this.setState({
                    error: res.error
                });
            });
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
            <div className='login-form-wrapper'>
                <form 
                    id='login-form'
                    className='login-form-fields-container'
                    onSubmit={this.handleSubmitJwtAuth}
                >
                    <h2>Log In</h2>
                    {errorMessage}
                    <div className='inputs-container'>
                        <div className='login-form-section'>
                            <label htmlFor='email'>Email:</label>{' '}
                            <input type="email" id='email' name='email' required />
                        </div>
                        <div className='login-form-section'>
                            <label htmlFor='password'>Password:</label>{' '}
                            <input type="password" id='password' name='password' required />
                        </div>
                    </div>
                    <div className='login-form-section'>
                        <button type='submit' className='hike-tracker-button'>Log In</button>
                    </div>
                </form>
            </div>
        )

    }

}

export default LoginForm