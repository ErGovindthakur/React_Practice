import React, { useCallback, useState } from 'react'

const TodoAppWithUseCallback = () => {
     const [todos,setTodos] = useState([]);
     const [count,setCount] = useState(0);

     // useCallback memoize this function
     const addTodo = useCallback(()=>{
          setTodos((prev)=>[...prev,`New Todo ${prev.length}`])
     },[])

     console.log("Parent todo container rendered with callback");
  return (
    <div className='w-75 h-36 bg-zinc-700 rounded-md flex items-center gap-3 flex-col'>
    <p>Todo App with Callback</p>
    <p>Count -: {count}</p>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <TodoList todos={todos} addTodo={addTodo} />
    </div>
  )
}

const TodoList = React.memo(({todos,addTodo}) => {
     console.log(" Child Todo List Rendered with callback");
     return(
          <div>
          {
               todos.map((todo,index)=>(
                    <p key={index}>{todo}</p>
               ))
          }
          <button onClick={addTodo} className='bg-gray-600 text-white px-2 py-1 rounded-md'>Add Todo</button>
          </div>
     )
})
export default TodoAppWithUseCallback

/*
 What is useCallback()?

useCallback() is a React Hook that lets you cache (memoize) a function so it’s not re-created on every render — unless one of its dependencies changes.

In short:
It helps prevent unnecessary re-renders of child components that receive a function as a prop.
*/