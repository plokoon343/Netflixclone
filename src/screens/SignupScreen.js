// import React from 'react';
//  import  {useRef} from 'react'
// import './SignupScreen.css'
// import { auth } from '../firebase';
// import {createUserWithEmailAndPassword} from 'firebase/auth'


// function SignupScreen() {
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//     const register = (e) =>{

//       e.preventDefault();
//       createUserWithEmailAndPassword(
//         emailRef.current.value,
//         passwordRef.current.value
//       )
//       .then((authUser) => {
//         console.log(authUser);
//       })
//       .catch((error) => {
//         alert(error.message);
//        });
//     }
//     const signIn = (e) =>{
//       e.preventDefault();
//     }
    
//   return(
//
   

//   ) }
// export default SignupScreen

import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Make sure to import your Firebase authentication object
import './SignupScreen.css'

function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();
  
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
        // You can redirect the user to another page or perform other actions here
      })
      .catch((error) => {
        alert(error.message);
      });
    }
      const signIn = (e) =>{
        e.preventDefault();
    
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) =>
      {
        console.log(authUser);
      })
      .catch((error) =>{
       alert(error.message);
  });
}

  return (
    <div className='signupScreen'>
             <form>
               <h1>
                   Sign In
               </h1>
              <input ref={emailRef} placeholder='Email' type='email'/>
            
               <input ref={passwordRef} placeholder='Password' type='password'/>
              <button type='submit' onClick={signIn}>
                   Sign In 
               </button>
               <h4> <span className='signupScreen_gray'>
               New to Netflix? &nbsp;
               </span>
               <span className='signupScreen_link' onClick={handleSignup}>
                 Sign up now. </span>
               </h4>
            </form>
           </div>
    
  );
}

export default Signup;

