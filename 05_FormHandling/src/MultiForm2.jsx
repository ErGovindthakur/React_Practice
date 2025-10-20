import React, { useState } from 'react'

const MultiForm2 = () => {

     const [formData, setFormData] = useState({
          name:"",
          email:"",
          password:"",
          country:"India",
          gender:"",
          agree:false
     })
     const handleSubmit = (e) => {
          e.preventDefault();
          console.log(formData);
          // alert("Form Submitted");
     }

     const handleChange = (e) => {
          const {name,value,type,checked} = e.target;

          setFormData((prev)=>({
               ...prev,[name]:type==="checkbox"?checked:value
          }))
     }

  return (
    <div className='w-[290px] bg-zinc-700 rounded-md shadow-md px-2 py-3 flex items-center flex-col'>
    <p className='text-xl text-gray-900 font-bold py-2'>Registration Form</p>
     <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
     <input 
     type="text"
     name='name'
     value={formData.name}
     onChange={handleChange}
     placeholder='Enter your name'
     className='px-2 py-2 rounded-md outline-none border border-amber-200'
     />
     <input 
     type="email"
     name='email'
     value={formData.email}
     onChange={handleChange}
     placeholder='Enter your email'
     className='px-2 py-2 rounded-md outline-none border border-amber-200'
     />
     <input 
     type="password"
     name='password'
     value={formData.password}
     onChange={handleChange}
     placeholder='Enter your password'
     className='px-2 py-2 rounded-md outline-none border border-amber-200'
     />
     <select
     name='country'
     value={formData.country}
     onChange={handleChange}
     className='px-2 py-2 rounded-md outline-none border border-amber-200'
     >
     <option value="India" className='text-black'>India</option>
     <option value="USA" className='text-black'>USA</option>
     <option value="Japan" className='text-black'>Japan</option>
     </select>
     <div className='flex gap-3'>
          <label>
          <input
          type='radio'
          name='gender'
          value="Male"
          checked={formData.gender==="Male"}
          onChange={handleChange}
          />
               Male
          </label>
          <label>
          <input 
          type='radio'
          name='gender'
          value='Female'
          checked={formData.gender==="Female"}
          onChange={handleChange}
          />
               Female
          </label>
     </div>

     <section>
          <input
          type='checkbox'
          name='agree'
          checked={formData.agree}
          onChange={handleChange}
          className='accent-purple-500'
          />
           <span className="text-white ">
          I agree to the terms and conditions
          </span>
     </section>
     {/* Submit Button */}
        <button
          type="submit"
          disabled={!formData.agree}
          className={`w-full py-2 rounded-lg text-white font-medium transition-colors ${
            formData.agree
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
     </form>
    </div>
  )
}

export default MultiForm2