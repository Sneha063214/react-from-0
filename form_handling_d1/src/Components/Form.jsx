import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({})
    const handleChange=(e)=>{
        let {name,value}=e.target;
        setUser({...user,[name]:value});    
    }
  return (
    <div className='bg-black min-h-screen flex flex-col justify-center items-center'>
        <div className='bg-white h-70 w-150 rounded-md flex flex-col justify-evenly p-4'>
            <h1 className='text-xl font-bold'>Register Here</h1>
            <input name="name" onChange={handleChange} className='border-2 border-black rounded-lg p-2' type="text" placeholder='enter your name'/>
            <input name="email" onChange={handleChange} className='border-2 border-black rounded-lg p-2' type="email" placeholder='enter your email id'/>
            <input name="password" onChange={handleChange} className='border-2 border-black rounded-lg p-2' type="password" placeholder='enter your password'/>
        </div>
        <div className='flex flex-col gap-4 text-lg text-white'>
            <h1>Your name is -{user.name}</h1>
            <h1>Your email id is -{user.email}</h1>
            <h1>Your password is -{user.password}</h1>
        </div>
      
    </div>
  )
}

export default Form
