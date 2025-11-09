import React, { useState } from 'react'

const App = () => {

  const [toggle, setToggle] = useState(true);

  let toggleSideBar = () => {
    setToggle((prev)=>(!prev));
  }

  return (
    <div className='bg-zinc-900 text-white w-full h-screen relative'>
      <div className={` ${toggle ? "w-[300px] h-full transition-all duration-300 block" : " w-[0px] transition-all duration-300 h-full none"}  bg-zinc-700 shadow-md shadow-amber-50`}>
      <button className='bg-violet-700 px-3 py-2 rounded-md text-white cursor-pointer absolute top-5 right-4' onClick={toggleSideBar}>Add Todo</button>
      </div>
    </div>
  )
}

export default App