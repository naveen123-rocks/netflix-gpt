import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkvalidation } from '../utilse/Validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utilse/firebase'; 

const Login = () => {


    const [ signin,setsignin] = useState(true);
    const [error,seterror] = useState(null)

    const email = useRef(null);
    const password = useRef(null);

    const HandleButton = () =>{


console.log(email.current.value);
console.log(password.current.value);
 const message = checkvalidation(email.current.value,password.current.value);
 seterror(message);
 if(message) return;
 if(!signin){
  // sign up 
  createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterror(errorCode + "-" + errorMessage)
    // ..
  });

 }
 else{
  // sign in logic
 }

}

    const togglesSignup = () => {
        setsignin(!signin)
    }
  return (
    <div className=' w-full'>
        <Header/>
        <div className=' absolute'>
        <img className='w-[3000px]' src="https://imgs.search.brave.com/iiIZ7kE8Xnv4wOoFv028ga2Ouu0VkPW36s3r2ZaR1wM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmZseGV4dC5j/b20vZmZlL3NpdGV1/aS92bHYzL2M5MDYy/NzFkLTcxODQtNGVl/Yy04M2M5LWI2ZDRj/MWEwNjhlYy9lODlm/ZGIyZS1jMGJkLTQ2/ZDktODU1ZC1jNjNh/OTUxMzc2Y2YvVVMt/ZW4tMjAyMzExMjct/cG9wc2lnbnVwdHdv/d2Vla3MtcGVyc3Bl/Y3RpdmVfYWxwaGFf/d2Vic2l0ZV9zbWFs/bC5qcGc" alt="" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className=' font-bold text-xl py-4'>{ signin ?'Sign In':'Sign up'}</h1>
            { !signin &&<input type="text" placeholder='Full name' className=' p-4 my-4 w-full bg-gray-700' />}  
           { !signin &&<input type="text" placeholder='mobile number' className=' p-4 my-2 w-full bg-gray-700' />}   
         <input ref={email} type="text" placeholder='Email address' className=' p-4 my-4 w-full bg-gray-700' />
         
         <input ref={password} type="current-password" name='current-password' placeholder='password' className=' p-4 my-4 w-full  bg-gray-700' />
         <p className=' text-red-500'>{error}</p>
         <button className=' p-4 my-6 bg-red-700 w-full rounded-md cursor-pointer' onClick={HandleButton}>{ signin ?'Sign In':'Sign up'}</button>
         <p className=' text-white py-4' onClick={togglesSignup}>{ signin ? 'New to Netflix? Sign UP Now':'Already registerd? sign in Now'}</p>
        </form>
    </div>
  )
}

export default Login;