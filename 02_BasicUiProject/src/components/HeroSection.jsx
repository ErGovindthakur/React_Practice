import React from 'react'
import Nav from './Nav'
import { MdArrowOutward } from "react-icons/md";
import CardSection from './CardSection';

const HeroSection = () => {
  return (
    // ✨ Used soft shadow + rounded corners for the hero container
    <div className='w-[90%] mx-auto bg-white rounded-2xl shadow-lg mt-7 p-6 transition-all hover:shadow-2xl'>
      
      {/* Nav section */}
      <Nav />

      {/* Main Content */}
      <div className='w-full flex flex-wrap justify-between items-start px-5 py-6 gap-6'>
        
        {/* Left Content */}
        <div className='w-full md:w-[35%]'>
          <h1 className='font-bold text-4xl leading-snug text-gray-800'>
            Prospective Customer Segmentation
          </h1>
          <p className='font-medium text-gray-500 text-lg leading-relaxed mt-6 mb-8'>
            We’re always ready to help our customers choose the best and make their design more elegant.
          </p>
          <button className='flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all'>
            Explore Insights <MdArrowOutward className='text-2xl'/>
          </button>
        </div>

        {/* Right Cards */}
        <div className='w-full md:w-[60%] flex flex-wrap gap-5 justify-center'>
          <CardSection id={1}/>
          <CardSection id={2}/>
          <CardSection id={3}/>
          <CardSection id={4}/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
