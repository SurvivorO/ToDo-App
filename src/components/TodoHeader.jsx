import { CirclePlus, Check } from 'lucide-react'

export const TodoHeader = ({ isAddingTodo, onToggleAdd, inputContent, setInputContent, onAddTodo }) => {
  return (
    <div className='flex text-4xl font-[Outfit] text-white font-bold px-4 py-2 items-center justify-between'>
      <span>Your todos:</span>
      <button onClick={onToggleAdd}>
        <CirclePlus />
      </button>
      <div className={`${isAddingTodo ? "flex lg:w-4xl md:w-2xl sm:w-xl justify-between absolute bottom-30 gap-5 border-2 rounded-3xl px-3 py-2" : "hidden"}`}>
        <input
          value={inputContent}
          placeholder='Enter todo here'
          type='text'
          onChange={(e) => setInputContent(e.target.value)}
          className='flex-1 bg-transparent outline-0 font-normal text-sm active:border-0'
        />
        <button onClick={onAddTodo} className='hover:bg-[#000000] items-center justify-center rounded-2xl'>
          <Check className='w-6 aspect-square px-1 ' />
        </button>
      </div>
    </div>
  )
}

export default TodoHeader
