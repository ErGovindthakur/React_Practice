import React from 'react'

const CardSection = ({ id }) => {
  return (
    // ✨ Added hover effect and animation
    <div className='w-[220px] bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl overflow-hidden relative shadow-lg hover:scale-105 transition-transform duration-300'>
      <img
        src='uiCard.avif'
        className='w-full h-48 object-cover opacity-90'
      />

      {/* Number tag */}
      <p className='bg-white text-purple-700 text-lg rounded-full h-9 w-9 flex items-center justify-center absolute top-3 left-3 font-bold shadow-md'>
        {id}
      </p>

      {/* Description */}
      <p className='text-white absolute bottom-16 left-3 text-sm w-[85%] leading-5 font-medium'>
        Here is the card data that shows detailed info about the customer.
      </p>

      {/* Buttons */}
      <div className='flex gap-2 absolute bottom-3 left-3'>
        <button className='text-white bg-white/30 hover:bg-white/50 rounded-md px-4 py-1 font-semibold transition'>
          Explore
        </button>
        <button className='text-white bg-white/30 hover:bg-white/50 rounded-full px-3 py-1 font-semibold transition'>
          OK
        </button>
      </div>
    </div>
  )
}

export default CardSection
