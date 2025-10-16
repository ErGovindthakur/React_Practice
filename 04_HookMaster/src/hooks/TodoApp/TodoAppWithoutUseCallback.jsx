import React, { useState } from 'react'

const TodoAppWithoutUseCallback = () => {
     const [todos,setTodos] = useState([]);
     const [count,setCount] = useState(0);

     const addTodo = () => {
          setTodos([...todos,`Here is new ${todos.length+1}`]);
     };

     console.log("Parent todo container rendered");
  return (
    <div className='w-75 h-36 bg-zinc-700 rounded-md flex items-center gap-3 flex-col'>
    <p>Todo App without Callback</p>
    <p>Count -: {count}</p>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <TodoList todos={todos} addTodo={addTodo} />
    </div>
  )
}

const TodoList = ({todos,addTodo}) => {
     console.log("Todo List Rendered");
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
}
export default TodoAppWithoutUseCallback