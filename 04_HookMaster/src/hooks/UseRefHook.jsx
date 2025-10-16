import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
     const inputRef = useRef(null);
     const [count,setCount] = useState(0);
     const prevCount = useRef(null);

     useEffect(()=>{
          inputRef.current.focus();
          prevCount.current = count;
     },[count])

     const handleClick = () => {
          alert(`You typed ${inputRef.current.value}`);
     }
  return (
    <div className='w-75 h-36 bg-zinc-700 rounded-md flex items-center gap-3 flex-col'>
     <p className='text-lg font-bold'>
          Auto-Focus Input Field
     </p>
     <section className='flex gap-2'>
     <input
        ref={inputRef} // 4️⃣ connect ref to input
        type="text"
        placeholder="Type your name"
        className="border border-gray-400 rounded px-2 py-1 outline-none"
      />
      <button
        onClick={handleClick}
        className="bg-indigo-600 text-white px-3 py-1 rounded-md"
      >
        Submit
      </button>

     </section>

      <p className='text-sm font-bold'>
          Using useRef hook to store prev value
     </p>
     <div className='flex justify-between gap-2'>
          <p>Current Count-:{count} And PrevCount-:{prevCount.current} </p>
          <button onClick={()=>setCount(count+1)}>+</button>
          <button onClick={()=>setCount(count-1)}>-</button>
     </div>
    </div>
  )
}

export default UseRefHook

/*
useRef() => 
1. It is such type of hook which has direct access to DOM Elements => " Directly reference a DOM node (e.g., input, div) without using document.querySelector. "

2. It is used to store mutable values => " Hold values that change but shouldn’t trigger re-render (like timer ID, previous state, etc.). "
3. Persist value across re-renders => " Keeps its .current value between renders (like a container that doesn’t reset). "
*/