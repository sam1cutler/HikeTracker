import React, { Component } from 'react';
import './SignupPage.css';

class SignupPage extends Component {

    render() {

        return (
            <div className='signup-form-wrapper'>
                <form id='signup-form'>
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