import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import logScreenshot from '../images/app_screenshot_hike-log.png';
import detailScreenshot from '../images/app_screenshot_hike-detail.png';
import summaryScreenshot from '../images/app_screenshot_hike-summary.png';

class LandingPage extends Component {

    state = {
        error: null,
    }

    onLoginSuccess = () => {
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
                this.setState({
                    error: 'Encountered problem with demo.'
                })
            })
        
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
            <div className='landing-page-wrapper'>
                <section className='landing-info-block'>
                    <h2>Track your hikes!</h2>
                    <p>Compile a clean, concise record of your hikes - <b>when</b> you hiked <b>what</b> trails.</p>
                    <img src={logScreenshot} alt='hike-log-screenshot' className='app-screenshot'/>
                </section>
                
                <section className='landing-info-block'>
                    <h2>Record additional hike data</h2>
                    <p>If you prefer a more data-rich history of your hikes, easily fill in additional information about your hikes, including:</p>
                    <ul className='data-options-list'>
                        <li>Total mileage</li>
                        <li>Total elevation change</li>
                        <li>Time</li>
                        <li>Weather</li>
                        <li>Notes about the hike</li>
                        <li>Link to a reference with info about the hike</li>
                        <li>And more!</li>
                    </ul>
                    <img src={detailScreenshot} alt='hike-detail-screenshot' className='app-screenshot'/>
                </section>

                <section className='landing-info-block'>
                    <h2>View concise summaries of your activity</h2>
                    <p>Easily access visual summaries of your hiking activity by year or month.</p>
                    <img src={summaryScreenshot} alt='hike-summary-screenshot' className='app-screenshot'/>
                </section>

                {/* <section className='landing-info-block'>
                    <h2>Analyze your hiking activity</h2>
                    <p>The more information you put into your HikeTracker logged info, the richer the analysis you can do.</p>
                    <p>Determine your average pace over time, the relationship between the elevation change of your hike and the pace you sustain, and more.</p>
                    <p className='screenshot-placeholder'><i>[Screenshot of some kinda analysis]</i></p>
                    </section> */}

                <div className='landing-info-block links-block'>
                    <button
                        type='button'
                        onClick={this.handleEnterDemoMode}
                        className='hike-tracker-button'
                    >
                        Experience the app as an established user!
                    </button>
                    {errorMessage}
                    <div className='hike-tracker-button'>
                        <Link
                            to='/signup'
                        >
                            Sign up for your own account and get started!
                        </Link>
                    </div>
                </div>
            </div>
        )

    }

}

export default LandingPage;