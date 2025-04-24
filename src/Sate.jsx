import { useState } from "react"

export function State(){

  const [car, setCar] = useState({
    year:2022,
    company: "BMW",
    model: "M5 CS"
  });

  function handleYear(event){
    setCar(car=>({...car,year: event.target.value}))
  }
  function handleCompany(event){
    setCar(car=>({...car,company: event.target.value}))
  }
  function handleModel(event){
    setCar(car=>({...car,model: event.target.value}))
  }

  return(
    <div>
      <p>My favorite car is {car.year} {car.company} {car.model}</p>

      <input type="number" value={car.year} onChange={handleYear} /><br />
      <input type="text" value={car.company} onChange={handleCompany} /><br />
      <input type="text" value={car.model} onChange={handleModel} />

      {/* <button onClick={handleUpdate}>Update</button> */}
    </div>
  )
}