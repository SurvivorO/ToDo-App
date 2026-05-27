import { Circle, CircleCheckBig } from "lucide-react"
import { useState } from "react"

export const Todo = ({content}) => {
    const [isTodoDone, setIsTodoDone] = useState(false)

    
  return (
    <div className={`flex gap-5 items-center px-3 py-2 rounded-xl transition-colors ${isTodoDone? "bg-[#1D1D21]" : "bg-[#34363C]"}`}>
        <div>
            <button onClick={()=>{setIsTodoDone(!isTodoDone)}} className="flex w-4 text-blue-300">
                {isTodoDone? (<CircleCheckBig/>) : (<Circle/>) }
            </button>
        </div>
        <div className={`flex items-center text-center font-[Outfit] text-l text-white ${isTodoDone? "line-through" : "" }`}>
            {content}
        </div>
    </div>
  )
}
