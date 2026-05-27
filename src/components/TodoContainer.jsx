import { Todo } from "./Todo"


export const TodoContainer = () => {
  return (
        <div className='flex flex-col gap-1 px-4 min-w-4xl max-w-6xl'>
          <Todo content={"Buy PS5 from microcenter."}/>
          <Todo content={"Make grocery list."}/>
          <Todo content={"Buy PS controller"}/>
        </div>
  )
}
