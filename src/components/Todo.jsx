import { useState, useEffect, useRef } from "react"

function Todo() {
    const [todo,setTodo] = useState({});
    const [loading,setLoading] = useState(true);
    const isMounted = useRef(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res=>res.json())
        .then(data=>{
            setTimeout(()=>{
                if(isMounted){
                    // Memory Leak issue is solved in react 18
                }
                setTodo(data)
                setLoading(false);
                
            },3000)
        })
        .catch(err=>console.log(err.message))

        return ()=>{
            isMounted.current = false;
        }
    })
  return loading ? <h3>Loading</h3> : <p>{todo.title}</p>
}

export default Todo