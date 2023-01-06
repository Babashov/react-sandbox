import { useState } from "react"
import Todo from "./Todo"

function UseRefExample3() {

    const [showTodo,setShowTodo] = useState(true);

  return (
    <div>
        {showTodo && <Todo />}
        
        <button onClick={e=>setShowTodo(!showTodo)} className="btn btn-primary mt-3">
            {showTodo ? "Hide" : "Show"}
        </button>
    </div>
  )
}

export default UseRefExample3