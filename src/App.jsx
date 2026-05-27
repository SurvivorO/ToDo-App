import { useState } from 'react'
import { Circle } from 'lucide-react'
import { CircleCheckBig } from 'lucide-react'
import { Todo }  from './components/Todo'
import { TodoContainer } from './components/TodoContainer'

function App() {
  

  return (
    <>
      <div className='flex text-8xl justify-center font-bold font-[Inter] text-blue-400 my-10'>TODO APP</div>
      <div className='flex justify-center'>
        <div className='flex flex-col w-fit gap-3'>
        <div className='flex text-4xl font-[Outfit] text-white font-bold px-4 py-2'>Your todos:</div>
        <TodoContainer/>
      </div>
      </div>
      
    </>
  )
}

export default App
