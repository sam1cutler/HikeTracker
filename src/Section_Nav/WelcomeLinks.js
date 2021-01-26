import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WelcomeLinks.css';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

class WelcomeLinks extends Component {

    onLoginSuccess = () => {
        //console.log('Login succeeded.');

        const { history } = this.props
        history.push(`/hikes`)
    }
    
    handleEnterDemoMode = () => {
        //console.log('User would like to demo the app.')

        AuthApiService.postLogin({
            email: 'sampleUser@sampleUser.com',
            password: 'abraCADABR4!'
        })
            // if server interaction works, will provide authToken in response
            .then(res => {
                // save authToken in browser
                TokenService.saveAuthToken(res.authToken)
                // run onLoginSuccess fxn
                this.onLoginSuccess()
            })
            .catch(res => {
                //console.log('There was an error.')
                // TO-DO: implement error-reporting, including here.
                // this.setState({ error: res.error })
            })
        
    }

    render() {

        return (
            <div className='nav-bar-wrapper'>
                <div>
                    <Link to='/'>
                        <h1>HikeTracker</h1>
                    </Link>
                </div>
                <div className='links-wrapper'>
                    <Link 
                        to='/signup'
                        className='individual-link'
                    >
                        Sign Up
                    </Link>

                    <Link
                        to='/login'
                        className='individual-link'
                    >
                        Log In
                    </Link>

                    <p 
                        onClick={this.handleEnterDemoMode}
                        className='individual-link demo-link'
                    >
                        Demo
                    </p>
                </div>
            </div>
        )

    }

}

export default WelcomeLinks;