import useLocalStorage from "../hooks/useLocalStorage";

function CustomHookExample2() {
  const [task,setTask] = useLocalStorage('task','');
  const [tasks,setTasks] = useLocalStorage('tasks',[]);

  const onSubmit = (e)=>{
    e.preventDefault();
    const obj = {
        task,
        completed:false,
        date: new Date().toLocaleTimeString(),
    }

    setTasks([...tasks,obj]);

  }

  return (
    
    <>
    
    <form onSubmit={onSubmit} className='w-50'>
        <div className="mb-3">

            <input
                className='form-control'
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

        </div>
       <button className="btn btn-primary" type="submit">Submit</button>
    </form>

    {tasks.map(task=>(
        <h3 key={task.date}>{task.task}</h3>
    ))}
    
    </>


  )
}

export default CustomHookExample2
