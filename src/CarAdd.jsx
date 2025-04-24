import { useState } from "react"

export function AddCar(){

  const [cars,setCars] =useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carCompany, setCarCompany] = useState("");
  const [carModel, setCarModel] = useState("");

  function addCar(){
    const newCar = {year: carYear, company: carCompany, model: carModel}
    setCars(cars => [...cars,newCar]);

    setCarYear(new Date().getFullYear())
    setCarCompany("")
    setCarModel("")
  }
  function removeCar(index){
    setCars(cars.filter((_, i) => i !== index))
  }
  function changeYear(event){
    setCarYear(event.target.value)
  }
  function changeCompany(event){
    setCarCompany(event.target.value)
  }
  function changeModel(event){
    setCarModel(event.target.value)
  }
  return(
    <div>
      <h2>List of cars</h2>
      <ul>
        {
          cars.map((car,index) => <li key={index} onClick={() => removeCar(index)}>{car.year} {car.company} {car.model}</li>)
        }
      </ul>
      <input type="number" value={carYear} onChange={changeYear} /><br />
      <input type="text" value={carCompany} onChange={changeCompany} /><br />
      <input type="text" value={carModel} onChange={changeModel} /><br />
      <button onClick={addCar}>Add Car</button>
    </div>
  )
}