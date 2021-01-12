import React, { Component } from 'react';
import './SignupPage.css';

class SignupPage extends Component {

    render() {

        return (
            <div className='signup-form-wrapper'>
                <form id='signup-form'>
                    <div className='signup-form-wrapper'>
                        <section className='signup-form-section'>
                            <label htmlFor='user-email'>Email:</label>{' '}
                            <input type="email" name='username' required />
                        </section>
                        <section className='signup-form-section'>
                            <label htmlFor='user-password1'>Password:</label>{' '}
                            <input type="password" name='user-password1' required />
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