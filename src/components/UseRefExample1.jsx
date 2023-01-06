import { useRef } from "react"

function UseRefExample1() {

    const inputRef = useRef();
    const paraRef = useRef();

    const formSubmit = e=>{
        e.preventDefault();
        inputRef.current.value = "Hello"
        const bgColor = inputRef.current.style.backgroundColor === 'red' ? 'green' : 'red';
        inputRef.current.style.backgroundColor = bgColor
        const paraText = paraRef.current.innerText === "Goodby" ? 'Hello' : 'Goodby';
        paraRef.current.innerText = paraText
        console.log(inputRef.current.value)
    }

  return (
    <div>
        <form onSubmit={formSubmit}>
            <label htmlFor="name">Name</label>
            <input ref={inputRef} type="name" className="form-control mb-2" />
            <p ref={paraRef} onClick={()=>{inputRef.current.focus()}}>Hello</p>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default UseRefExample1