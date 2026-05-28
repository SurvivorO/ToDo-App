import { useState } from 'react'
import { Todo }  from './components/Todo'
import { TodoContainer } from './components/TodoContainer'
import TodoHeader from './components/TodoHeader'

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

  const deleteTodo = (id)=>{
    setContent((content)=>content.filter((todo)=> todo.id !== id))
  }


  const enableTextArea = ()=>{
    setIsAddingTodo(!isAddingTodo)
  }

  return (
    <>
      <div className='flex text-8xl justify-center font-bold font-[Inter] text-blue-400 my-10'>TODO APP</div>
      <div className='flex justify-center'>
        <div className='flex flex-col w-fit gap-3'>
        <TodoHeader
          isAddingTodo={isAddingTodo}
          onToggleAdd={enableTextArea}
          inputContent={inputContent}
          setInputContent={setInputContent}
          onAddTodo={addTodo}
        />
        <TodoContainer todos={content} deleteTodo={deleteTodo}/>
      </div>
      </div>
    </>
  )
}

export default App
