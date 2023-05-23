import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Register = () => {

  const [login, setLogin] = useState("false")

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">

      <div className="sm:flex justify-center gap-x-10 items-center  border mx-16 rounded-2xl px-4">

      <div className="order-last">
      <img src="https://hopingminds.com/wp-content/uploads/2023/01/Asset-5.png" alt="" className="mt-0" />
    </div>
    <div className="md:block hidden w-[1px] h-[34rem] bg-gray-200 order-2"></div>
    {
      login === 'false' && (
        <form className="flex flex-col justify-center items-center  ">

      <h1 className="text-4xl py-10">Sign Up</h1>

<input type="text" name="" id="" placeholder="name"/>
<input type="email" name="" id="" placeholder="email"/>
<input type="password" name="" id="" placeholder="password"/>
<div className="flex gap-4 justify-center">
<input type="checkbox" name="" id="" className="rounded-full"/>
<label htmlFor="">I agree to the terms and conditions</label>
</div>

<button className="mt-6 border py-3 px-3 rounded-2xl my-3">Register</button>
<p onClick={()=>setLogin("true")} className="cursor-pointer">Already have an account? <a>Login</a></p>
    </form>
      )
    }
    

    {/* login form  */}

{
  login === 'true' && (
    <form className="flex flex-col justify-center items-center  ">

    <h1 className="text-4xl py-10">Login</h1>
    
    
    <input type="email" name="" id="" placeholder="email"/>
    <input type="password" name="" id="" placeholder="password"/>
    <div className="flex gap-4 justify-center">
    <input type="checkbox" name="" id="" className="rounded-full"/>
    <label htmlFor="">I agree to the terms and conditions</label>
    </div>
    
    <button className="mt-6 border py-3 px-3 rounded-2xl my-3">Login</button>
  
    <p onClick={()=>setLogin("false")} className="cursor-pointer">Already have an account? <a>Register</a></p>
    
    </form>
  )
}




      </div>

    </div>
  )
}

export default Register

