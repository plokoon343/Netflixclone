import React, { useState } from 'react'
import './Login.css'
import SignupScreen from './SignupScreen';
function Login() {
const [signIn, setSignIn] = useState(false);


  return (
    <div className='Login'>
      <div className='LoginScreen_background'>
        <img className='LoginScreen_logo'
        src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''>

        </img>
        <button onClick={() => setSignIn(true)

        }
        className='LoginScreen_button'>
            Sign In
        </button>
        <div className='LoginScreen_gradient'>
        </div>
        <div className='LoginScreen_body'>
        {
            signIn ? (
                <SignupScreen />
            ):(
                <>
                <h1>
                  Unlimited films, TV programmes and more.
                </h1>
                <h2>Watch anywhere. Cancel anytime</h2>
                <h3>Ready to Watch? Enter your email to create 
                or restart your membership
                </h3>
            <div className='LoginScreen_input'>
                <form>
                <input type='email' placeholder='Email Address' />
                <button className='LoginScreen_GS'
                onClick={() => setSignIn(true)}>
                    GET STARTED
                </button>
                </form>
            </div>
            </>
            )
        }
            
        </div>
      </div>
    </div>
  )
}

export default Login;
