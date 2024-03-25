import React, { useState } from "react"
import { addPizza } from "./pizzaSlice"
import { useDispatch } from "react-redux"


export default function PizzaOrder(){

    const [currentSelect, setSelect] = useState("Hawaii")
    const dispatch = useDispatch();
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addPizza(currentSelect));
        } 
        const change = (e: React.ChangeEvent<HTMLSelectElement>) =>{
            setSelect(e.target.value)
        }
    return(
        <>
        <h1>Order pizza</h1>
        <form>
            <select name="pizza" onChange={change}>
                <option value="Hawaii">Hawaii</option>
                <option value="Pepperoni">Pepperoni</option>
                <option value="Salami">Salami</option>
                <option value="Picant">Picant</option>   
                <option value="Quattro Formaggi">Quattro Formaggi</option>
               </select>
               <input type="submit" value="Order Pizza" onClick={submit}/>
        </form>
        </>
    )


}