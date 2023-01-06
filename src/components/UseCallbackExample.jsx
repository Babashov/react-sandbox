import React, { useState,useCallback } from "react"

function UseCallbackExample() {
    const [tasks,setTasks] = useState([]);
    const addTask = useCallback(()=>setTasks((prevTask)=>[...prevTask,'Some Task value']),[setTasks]);
  return (
    <div>
        {tasks.map((task,index)=>{
            return (<p key={index}>{task}</p>)
        })}
        <Button addTask={addTask}/>
    </div>
  )
}

const Button = React.memo(({addTask})=>{
    console.log('Button Rendered');
    return <button onClick={addTask} className="btn btn-primary">Add Task</button>
})

export default UseCallbackExample