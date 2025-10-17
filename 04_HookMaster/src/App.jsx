import React from 'react'
import UseStateHook from './hooks/UseStateHook'
import UseEffectHook from './hooks/UseEffectHook'
import UseRefHook from './hooks/UseRefHook'
import TodoAppWithoutUseCallback from './hooks/TodoApp/TodoAppWithoutUseCallback'
import TodoAppWithUseCallback from './hooks/TodoApp/TodoAppWithUseCallback'
import UseMemoHook from './hooks/UseMemoHook'
import TodoContainer from './hooks/TodoCombineAllHooks/TodoContainer'

const App = () => {
  return (
    <div className='w-full h-screen flex flex-wrap gap-2 bg-zinc-900 text-white px-10 py-10'>
      <UseStateHook />
      <UseEffectHook />
      <UseRefHook />
      <TodoAppWithoutUseCallback />
      <TodoAppWithUseCallback />
      <UseMemoHook />
      <TodoContainer />
    </div>
  )
}

export default App