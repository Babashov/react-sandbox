import { useState,useRef,useEffect,useMemo } from "react"

function UseMemoExample() {
    const [number,setNumber] = useState(1);
    const [inc,setInc] = useState(0);
    const renders = useRef(1);

    // const sqrt = getSqrt(number);
    const sqrt = useMemo(()=>getSqrt(number),[number]) ;

    const onClick = ()=>{
        setInc((prevState)=>{
            console.log(prevState + 1)
            return prevState + 1;
        })
    }

    useEffect(()=>{
        renders.current += 1;
    })
  return (
    <div>
        <input 
            type="number" 
            className="form-control w-25" 
            value={number} 
            onChange = {(e)=> setNumber(e.target.value)} 
        />
        <h3>Inc value: {inc}</h3>
        <h3 className="my-3">
            Sqrt of {number} is {sqrt}
        </h3>
        <button 
            onClick={onClick} 
            className="btn btn-primary">
            ReRender
        </button>
        <h3>Renders: {renders.current}</h3>
    </div>
  )
}

function getSqrt(n)
{
    for(let i = 0; i <= 10000;i++)
    {
        console.log(i);
    }
    return Math.sqrt(n);
}

export default UseMemoExample