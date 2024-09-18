import React, { useRef } from 'react'
import {  createUserWithEmailAndPassword,  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase-config.js';



const Register = () => {

    
  let email = useRef()
let password = useRef()
let navigate = useNavigate()


 function Registercheck(event) {
  event.preventDefault()
console.log(email.current.value);

createUserWithEmailAndPassword(
  auth,
  email.current.value,
  password.current.value
)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate('/login')
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  })
}

  return (
<>
<div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
  <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
    <h1 className="text-3xl font-semibold text-center text-gray-700">
      Rigister
    </h1>
    <form className="space-y-4" onSubmit={Registercheck}>
      <div>
        <label className="label">
          <span className="text-base label-text">Email</span>
        </label>
        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full input input-bordered"
        />
      </div>
      <div>
        <label className="label">
          <span className="text-base label-text">Password</span>
        </label>
        <input
        ref={password}
          type="password"
          placeholder="Enter Password"
          className="w-full input input-bordered"
        />
      </div>
      <a
        href="#"
        className="text-xs text-gray-600 hover:underline hover:text-blue-600"
      >
        Forget Password?
      </a>
      <div>
        <button className="btn btn-block btn-neutral">Register</button>
      </div>
    </form>
  </div>
</div>

</>


)
}

export default Register