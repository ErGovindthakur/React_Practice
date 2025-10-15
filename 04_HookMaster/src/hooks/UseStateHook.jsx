import React, { useState } from 'react'

const UseStateHook = () => {
     const [counter ,setCounter] = useState(0);

     // creating functions to implement counter app
     const increaseCount = () => {
          setCounter((prev)=>{
               if(prev<18){
                    return prev+1
               }else{
                    return prev;
               }
          })
     }
     const decreaseCount = () => {
          setCounter((prev)=>{
               if(prev>0){
                    return prev-1
               }else{
                    return prev;
               }
          })
     }
     const multipleAdd = () => {
          setCounter((prev)=>{
               // if(prev<18){
               //      return prev+2
               // }else{
               //      return 18;
               // }
               let newValue = prev + 2;
               return Math.min(newValue,18);
          })
     }
  return (
    <div className='w-75 h-30 bg-zinc-700 rounded-md flex items-center gap-3 flex-col'>
     <p className='text-5xl font-bold'>{counter}</p>
     <section className='flex gap-2'>
          {/* <button className='bg-gray-500 px-2 py-1 rounded-full hover:bg-gray-600 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-amber-300 hover:transition-all' onClick={increaseCount}>Increase</button>
          <button className='bg-gray-500 px-2 py-1 rounded-full hover:bg-gray-600 cursor-pointer' onClick={decreaseCount}>Decrease</button>
          <button className='bg-gray-500 px-2 py-1 rounded-full hover:bg-gray-600 cursor-pointer' onClick={multipleAdd}>Multiple-Add</button> */}
          <ButtonComp btnText="Increase" onClick={increaseCount}/>
          <ButtonComp btnText="Decrease" onClick={decreaseCount}/>
          <ButtonComp btnText="Multi-Add" onClick={multipleAdd}/>
     </section>
    </div>
  )
}

const ButtonComp = ({btnText,onClick}) => {
     return(
          <>
             <button className='bg-gray-500 px-2 py-1 rounded-full hover:bg-gray-600 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-amber-300 hover:transition-all' onClick={onClick} >{btnText}</button>  
          </>
     )
}
export default UseStateHook