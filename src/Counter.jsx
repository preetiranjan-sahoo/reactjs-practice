import React, { useState } from "react"

export function Counter(){

  const [count, setCount] = useState(0);

  const increment = ()=>{
    setCount(count + 1)
  }
  const decrement = ()=>{
    setCount(count - 1)
  }
  const resetCount= () =>{
    setCount(0)
  }


  return(
    <div className="container">
    <p className="display">Count Value: {count}</p>
    <button className="btn" onClick={decrement}>Decrement</button>
    <button className="btn" onClick={increment}>Increment</button>
    <button className="btn" onClick={resetCount}>Reset</button>
    </div>
  )
}