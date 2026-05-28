import { useState } from 'react'
import { CirclePlus, Check, FastForward } from 'lucide-react'
import { Todo }  from './components/Todo'
import { TodoContainer } from './components/TodoContainer'

function App() {
  
  const [isAddingTodo, setIsAddingTodo] = useState(false)
  const [inputContent, setInputContent] = useState("")
  const [content, setContent] = useState([])

  const addTodo = ()=>{
    setIsAddingTodo(false)
    if(!inputContent.trim()) return
    setContent((content)=> [
      ...content,
      {
        id: crypto.randomUUID(),
        textContent: inputContent,
      },

    ])
    setInputContent("")
  }


  const enableTextArea = ()=>{
    setIsAddingTodo(!isAddingTodo)
  }

  return (
    <>
      <div className='flex text-8xl justify-center font-bold font-[Inter] text-blue-400 my-10'>TODO APP</div>
      <div className='flex justify-center'>
        <div className='flex flex-col w-fit gap-3'>
        <div className='flex text-4xl font-[Outfit] text-white font-bold px-4 py-2 items-center justify-between'>
          Your todos:
          <button onClick={enableTextArea}>
            <CirclePlus/>
          </button>
          <div className={`${isAddingTodo? "flex lg:w-4xl md:w-2xl sm:w-xl justify-between absolute bottom-30 gap-5 border-2 rounded-3xl px-3 py-2" : "hidden"}`}>
              <input 
              onSubmit={addTodo}
              value={inputContent}
              placeholder='Enter todo here' 
              type='text'
              onChange={(e)=> setInputContent(e.target.value)}
              className='flex-1 bg-transparent outline-0 font-normal text-sm active:border-0'
              />
              <button onClick={addTodo} className='hover:bg-[#000000] items-center justify-center rounded-2xl'>
                <Check className='w-6 aspect-square px-1 '/>
              </button>
              
          </div>

        </div>
        <TodoContainer todos={content}/>
      </div>
      </div>
      
    </>
  )
}

export default App
