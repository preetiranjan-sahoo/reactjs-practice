import React from "react"
import { useState } from "react"

export function MyComponent(){

  const [name, setName] = useState("Thinking...");
  const [age, setAge] = useState(0);
  const [isEmployed, setEmployed] = useState(false);

  const updateName = () =>{
   setName("Bunty")
  }

  const updateAge = () =>{
    setAge(age + 1)
  }

  const employedStaus = () =>{
    setEmployed(!isEmployed)
  }
    

 return(
  <div>
    <p>Name: {name}</p>
    <button onClick={updateName}>Set Name</button>

    <p>Age: {age}</p>
    <button onClick={updateAge}>Increment Age</button>

    <p>Employed: {isEmployed ? "Yes" : "No"}</p>
    <button onClick={employedStaus}>Status</button>
  </div>
 )
}