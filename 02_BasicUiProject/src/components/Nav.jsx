import React from 'react'

const Nav = () => {
  return (
    // ✨ Clean top bar with elegant spacing
    <div className='w-full flex justify-between items-center px-5 pt-3 border-b border-gray-200 pb-3'>
      <button className='text-purple-700 font-semibold text-lg hover:text-purple-900 transition'>
        Best Showcase
      </button>
      <p className='text-gray-600 font-medium italic'>
        Love to explore new places
      </p>
    </div>
  )
}

export default Nav
