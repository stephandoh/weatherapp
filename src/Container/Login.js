import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'


function Login() {
    return (
        <div className='home-bg'>
            <div id="login-box">
                <div class="left">
                    <h1>Sign up</h1>

                    <input type="text" name="username" placeholder="Username" />
                    <input type="text" name="email" placeholder="E-mail" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="password" name="password2" placeholder="Retype password" />

                    <input type="submit" name="signup_submit" value="Sign me up" />
                   

                </div>

                <div class="right">
                    <span class="loginwith">Sign in with<br />social network</span>

                    <button class="social-signin facebook">Log in with facebook</button>
                    <button class="social-signin twitter">Log in with Twitter</button>
                    <button class="social-signin google">Log in with Google+</button>
                    <span>
                        <Link to='/weather'><button class="check">Check Weather</button></Link>
                    </span>
                </div>
                <div class="or">OR</div>
            </div>
        </div>
    )
}

export default Login


