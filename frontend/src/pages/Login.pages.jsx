import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  const [state,setState]=useState('Sign Up')
  const [email,setEmail]=useState('')
  const [password,setPassword] =useState('')
  const [name,setName]=useState('')

  const onSubmitHandler=async(event)=>{
    event.prevenrDefault() //When a form is submitted, the browser's default behavior is to refresh the page. This method stops that behavior.
  }

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-lg text-zinc-600 text-sm shadow-lg'>
        <p className='font-semibold text-2xl'>{state==='Sign Up' ? "Create Account" : "Login"}</p>
        <p> Please {state==='Sign Up' ?"sign up":"sign in"} to book an appointment</p>
        {
          state==="Sign Up" && <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.value)} value={name} required />
        </div>
        }                
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base hover:bg-indigo-600'>{state==='Sign Up' ? "Create Account" : "Login"}</button>
        {
          state==="Sign Up"
          ?<p>Already have an account? <span onClick={()=>setState('Login')}className='text-primary underline cursor-pointer hover:text-indigo-600'>Login here</span></p>
          :<p>Create a new account? <span onClick={()=>setState('Sign Up')}className='text-primary underline cursor-pointer hover:text-indigo-600'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login