import { useState } from "react"

export function Onchange(){

  const [name, setName] = useState();
  const [quanity, setQuantity] = useState();
  const [comment, setComment] = useState();
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState();

  function handleNameChange(event){
    setName(event.target.value);
  }
  function handleQuantity(event){
    setQuantity(event.target.value)
  }
  function handleComment(event){
    setComment(event.target.value)
  }
  function handlePayment(event){
    setPayment(event.target.value)
  }
  function handleShipping(event){
    setShipping(event.target.value);
  }

  return(
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input type="number" value={quanity} onChange={handleQuantity} />
      <p>Quantity: {quanity}</p>

      <textarea value={comment} onChange={handleComment} placeholder="Enter Address"/>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePayment}>
        <option value="">Select an option</option>
        <option value="Cash On Delivery">Cash On Delivery</option>
        <option value="UPI">UPI</option>
        <option value="Net Banking">Net Banking</option>
      </select>
      <p>Payment Type: {payment}</p>

      <label >
        <input type="radio" value="Pick Up" 
        checked={shipping === "Pick Up"}
        onChange={handleShipping} />
        Pick Up</label><br />
      <label >
        <input type="radio" value="Delivery" 
        checked={shipping === "Delivery"} 
        onChange={handleShipping} />
        Delivery</label>
        <p>Shipping Type: {shipping}</p>

    </div>
  );
}