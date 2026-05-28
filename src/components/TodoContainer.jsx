import { Trash2 } from "lucide-react"
import { Todo } from "./Todo"


export const TodoContainer = ({ todos,deleteTodo }) => {
  return (
    <div className='flex flex-col gap-1 px-4 lg:min-w-4xl max-w-6xl md:min-w-2xl sm:min-w-xl'>
        {todos.map((arg) => <Todo key={arg.id} content={arg.textContent} deleteTodo={()=>deleteTodo(arg.id)}/>)}
    </div>
  )
}
