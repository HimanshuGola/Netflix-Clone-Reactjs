import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useRef } from 'react'
import { auth } from '../firebase'
import "./SignupScreen.css"
import { useNavigate } from 'react-router-dom'

function SignupScreen() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((authUser)=>{
      console.log(authUser)
    })
    .catch((error)=>{
      alert(error.message)
    })
    navigate("/")
  }
  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((authUser)=>{
      console.log(authUser)
    })
    .catch((error)=>{
      alert(error.message)
    })
    navigate("/")
  }

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email Address' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button type='submit' onClick={logIn}>Sign In</button>
        <button type='submit' onClick={register}>Sign Up</button>
        <h4 className="signupScreen_gray">New to Netflix? Enter email and password and click on Sign Up to create an account</h4>
      </form>
    </div>
  )
}

export default SignupScreen