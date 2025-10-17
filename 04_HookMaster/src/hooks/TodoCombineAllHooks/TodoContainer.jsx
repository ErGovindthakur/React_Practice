import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const TodoContainer = () => {
     const [todos,setTodos] = useState([]);
     const [todo,setTodo] = useState("");
     const inpRef = useRef(null);
     useEffect(()=>{
          if(todos.length>0){
               alert("New Todo Added");
          }
     },[todos])
     
     
     const addTodo = useCallback((e) => {
          e.preventDefault();
          if(!todo.trim())return;

          setTodos((prevTodos)=>[...prevTodos,todo])
          setTodo("");
          inpRef.current.focus();
          console.log(todos);
     },[todo])

     const totalTodos = useMemo(()=>{
          console.log("Calculating Total todos");
          return todos.length
     },[todos])

  return (
    <div className='w-60 px-2 py-3 bg-gray-700 rounded-md'>
    <p>Todo App -: {totalTodos}</p>
    <div>
    <form
    onSubmit={addTodo}
    className='flex justify-center w-full h-[34px]'
    >
     <input
     ref={inpRef}
     type='text' 
     value={todo}
     onChange={(e)=>setTodo(e.target.value)}
     className='outline-none border drop-shadow-amber-200'
     />
     <button className='bg-gray-500 text-white px-2 py-1'>Add</button>
    </form>
    </div>
    <TodoList todos={todos} />
    </div>
  )
}

const TodoList = React.memo(({todos}) => {
     return(
          <div>
          {
               todos.length===0 ? (<p>Add New Todo</p>) : todos.map((todo,index)=>(
                    <p key={index}>{todo}</p>
               ))
          }
          </div>
     )
})
export default TodoContainer