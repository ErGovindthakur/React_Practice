import React from 'react'
import UseStateHook from './hooks/UseStateHook'
import UseEffectHook from './hooks/UseEffectHook'
import UseRefHook from './hooks/UseRefHook'
import TodoAppWithoutUseCallback from './hooks/TodoApp/TodoAppWithoutUseCallback'

const App = () => {
  return (
    <div className='w-full h-screen flex gap-3 bg-zinc-900 text-white px-10 py-10'>
      <UseStateHook />
      <UseEffectHook />
      <UseRefHook />
      <TodoAppWithoutUseCallback />
    </div>
  )
}

export default App