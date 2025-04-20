import { useState } from "react"

export function ColorPicker(){

  const [color,setColor] = useState();

  function handleColor(event){
    setColor(event.target.value)
  }

  return(
    <div className="color-container">
      <h2>Color Picker</h2>
      <div className="color-display" style={{backgroundColor:color}}>
      <p>Selected color: {color}</p>
      </div>
      <label>Select a color:</label>
      <input type="color" value={color} onChange={handleColor} />
    </div>
  )
}