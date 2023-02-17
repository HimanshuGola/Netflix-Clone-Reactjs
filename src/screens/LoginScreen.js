import React, { useState } from 'react'
import "./LoginScreen.css"
import SignupScreen from './SignupScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <>
    <div className='loginScreen'>
      <div className="loginScreen_navWrapper">
        <div className="loginScreen_navbar">
            <img className='loginScreen_logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
            <select class="form-select">
              <option selected lang="en" value="/in/">English</option>
              <option lang="hi" value="/in-hi/">हिन्दी</option>
            </select>
            <button className="loginScreen_button" onClick={()=> setSignIn(true)}>Sign In</button>
          </div>
      </div>
        
        <div className="loginScreen_body">
          {signIn ? 
          <SignupScreen /> :
          (
            <div className='loginScreen_mainBody'>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder='Email Address' />
                  <button className="loginScreen_getStarted" onClick={()=> setSignIn(true)}>Get Started</button>
                </form>
              </div>
          </div>
          )
        }
          
        </div>
    </div>
        {/* <div className="loginScreen_gradient"></div> */}
    
    </>
  )
}

export default LoginScreen