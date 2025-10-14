import React from 'react'

const Header = () => {
  return (
    // ✨ Added background and shadow for header section separation
    <div className='w-full flex items-center gap-8 bg-white/70 backdrop-blur-md rounded-xl shadow-md p-6 mb-8 transition-all hover:shadow-xl'>
      {/* Left section - profile image */}
      <div className='w-[12%]'>
        <img 
          src='uiProfile.avif'
          className='rounded-full w-full h-36 object-cover border-4 border-purple-400 shadow-sm'
        />
      </div>

      {/* Right section - heading */}
      <div className='flex flex-col justify-center'>
        <h1 className='uppercase font-extrabold text-5xl text-gray-800 pb-3 tracking-tight'>
          Presentation Design
        </h1>
        <h2 className='font-semibold text-gray-600 text-2xl'>
          Specially for industrial professionals with more specialty
        </h2>
      </div>
    </div>
  )
}

export default Header
