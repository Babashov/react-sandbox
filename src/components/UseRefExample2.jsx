import { useState,useEffect,useRef } from "react"

function UseRefExample2() {

    const [name,setName] = useState('');

    const renders = useRef(0);
    const prevNameRef = useRef('');

    useEffect(()=>{
        renders.current += 1;
        prevNameRef.current = name;
    },[name])

  return (
    <div>
        <h1>Renders: {renders.current}</h1>
        <h2>Previous State Ref: {prevNameRef.current}</h2>
        <h2>Current State: {name}</h2>
        <input type="text" value={name} onChange={(e)=>{e.preventDefault();setName(e.target.value)}} className="form-control" />
    </div>
  )
}

export default UseRefExample2