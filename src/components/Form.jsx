import React, { useState } from 'react'

const Form = () => {

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [message , setMessage] = useState("")

    const [errors , setErrors] = useState("")

    // console.log("Name:", name)
    // console.log("Email:", email)
    // console.log("Message:", message)
    // const newErrors = { name: "Name is Required", email: "Invalid Email, Please correct it." message: "Message cannot be empty!" }

    // Submit Form handler
    const handleSubmit = (e)=>{

             e.preventDefault();

        if (validateForm()){
                alert(`Hi, ${name}! Thanks for Submitting the Form`)
                setName("")
                setEmail("")
                setMessage("")

        }
    }

    // check form validation 
    const validateForm = () => {

        const newErrors = {};
        if(!name.trim()) newErrors.name = "Name is Required"
        if(!email.trim() || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) newErrors.email = "Invalid Email, Please correct it."
        if(!message.trim()) newErrors.message = "Message cannot be empty!"
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0  
        
    }

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto bg-white text-black p-8 rounded space-y-3'>
        
        {/* name field */}
        <div>
            <label className='block mb-1 font-semibold'> Name: </label>
            <input 
            value={name}
            onChange={(event)=> setName(event.target.value) }
            type="text" 
            name="name" 
            id="name" 
            placeholder='Enter Your Name' 
            className='border p-2 md:w-64 w-full'/>

            {
                errors.name && <p className='text-red-500 text-sm italic mt-1'>{errors.name }</p>
            }
        </div>
        {/* Email Field */}

        <div>
            <label className='block mb-1 font-semibold'> Email: </label>
            <input 
            value={email}
            onChange={(event)=> setEmail(event.target.value) }
            type="email" 
            name="email" 
            id="email" 
            placeholder='Enter Your Email' 
            className='border p-2 md:w-64 w-full'/>

            {
                errors.email && <p className='text-red-500 text-sm italic mt-1'>{ errors.email }</p>
            }
        </div>

        {/* text Message Area */}

        <div>
            <label className='block mb-1 font-semibold'> Message: </label>
            <textarea 
            value={message}
            onChange={(event)=> setMessage(event.target.value) }
            rows="4" 
            name="massage" 
            id="massage" 
            placeholder='Type your message here...' 
            className='border p-2 md:w-64 w-full' ></textarea>
            {
                errors.message && <p className='text-red-500 text-sm italic mt-1'>{ errors.message }</p>
            }
        </div>
        <button type="submit" className='bg-blue-600 px-6 py-2 text-white rounded'>Submit</button>
        
    </form>
  )
}

export default Form