import React, { Component } from 'react';
import './LoginForm.css';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

class LoginForm extends Component {

    static defaultProps = {
        onLoginSuccess: () => {}
    };

    onLoginSuccess = () => {
        console.log('Simulating login success');
        const { history } = this.props
        history.push('/user/1234/hikes')
    }

    handleSubmitJwtAuth = event => {
        event.preventDefault();
        console.log('User has submitted the login form.');

        const { email, password } = event.target;

        AuthApiService.postLogin({
            email: email.value,
            password: password.value
        })
            // if server interaction works, will provide authToken in response
            .then(res => {
                console.log('Received a response from the AuthApiService.postLogin call:')
                console.log(res)
                //clear form values
                email.value = '';
                password.value = '';
                // save authToken in browser
                TokenService.saveAuthToken(res.authToken)
                // run EVENTUALLY props-provided onLoginSuccess fxn
                this.onLoginSuccess()
            })
    }

    render() {

        return (
            <div className='login-form-wrapper'>
                <form 
                    id='login-form'
                    className='login-form-wrapper'
                    onSubmit={this.handleSubmitJwtAuth}
                >
                    <h2>Login</h2>
                    <section className='login-form-section'>
                        <label htmlFor='email'>Email:</label>{' '}
                        <input type="email" name='email' required />
                    </section>
                    <section className='login-form-section'>
                        <label htmlFor='password'>Password:</label>{' '}
                        <input type="password" name='password' required />
                    </section>
                    <section className='login-form-section'>
                        <button type='submit'>Log In</button>
                    </section>
                </form>
            </div>
        )

    }

}

export default LoginForm