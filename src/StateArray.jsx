import { useState } from "react"

export function StateArray(){

  const [food,setFood] = useState(["Apple","Banana","Carrot"]);

  function handleAdd(){
    const newFood = document.getElementById("foodinput").value;
    document.getElementById("foodinput").value = "";
    setFood(food => [...food,newFood])
  }
  function handleRemove(index){
    setFood(food.filter((_, i) => i !== index))
  }
  return(
    <div>
      <h2>List of foods</h2>
      <ul>
        {
          food.map((food, index) =>
          <li key={index} onClick={() => handleRemove(index)}>
            {food}
            </li>)
        }
      </ul>
      <input type="text" id="foodinput" placeholder="Enter Food Name" />
      <button onClick={handleAdd}>Add Food</button>
    </div>
  )
}