import React from 'react'
import UseStateHook from './hooks/UseStateHook'
import UseEffectHook from './hooks/UseEffectHook'
import UseRefHook from './hooks/UseRefHook'

const App = () => {
  return (
    <div className='w-full h-screen flex gap-3 bg-zinc-900 text-white px-10 py-10'>
      <UseStateHook />
      <UseEffectHook />
      <UseRefHook />
    </div>
  )
}

export default App