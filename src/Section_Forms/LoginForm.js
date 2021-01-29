import React, { Component } from 'react';
import './LoginForm.css';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

class LoginForm extends Component {

    state = {
        error: null,
    }

    onLoginSuccess = () => {
        //console.log('Login succeeded.');

        const { history } = this.props
        history.push(`/hikes`)
    }

    handleSubmitJwtAuth = event => {
        event.preventDefault();
        //console.log('User has submitted the login form.');

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
                //console.log('There was an error.')
                //console.log(res.error)
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
                        <section className='login-form-section'>
                            <label htmlFor='email'>Email:</label>{' '}
                            <input type="email" name='email' required />
                        </section>
                        <section className='login-form-section'>
                            <label htmlFor='password'>Password:</label>{' '}
                            <input type="password" name='password' required />
                        </section>
                    </div>
                    <section className='login-form-section'>
                        <button type='submit' className='hike-tracker-button'>Log In</button>
                    </section>
                </form>
            </div>
        )

    }

}

export default LoginForm