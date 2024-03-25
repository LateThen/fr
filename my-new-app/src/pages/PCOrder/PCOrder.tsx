import React, { useState } from "react"
import { addPC } from "./pcSlice"
import { useDispatch } from "react-redux"


export default function PCOrder(){

    const [currentSelect, setSelect] = useState("Mid-perf-CPU")
    const dispatch = useDispatch();
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addPC(currentSelect));
        } 
        const change = (e: React.ChangeEvent<HTMLSelectElement>) =>{
            setSelect(e.target.value)
        }
    return(
        <>
        <h1>Order PC</h1>
        <form>
            <select name="cpu" onChange={change}>
                <option value="Mid-Perf-CPU">Mid-Perf CPU</option>
                <option value="High-Perf-CPU">High-Perf CPU</option>
                <option value="Low-Perf-CPU">Low-Perf CPU</option>
               </select>
               <select name="gpu" onChange={change}>
                <option value="Mid-Perf-GPU">Mid-Perf-GPU</option>
                <option value="High-Perf-GPU">High-Perf-GPU</option>
                <option value="Low-Perf-GPU">Low-Perf-GPU</option>
               </select>
               <select name="ram" onChange={change}>
                <option value="RAM-Mid-Range">RAM-Mid-Range</option>
                <option value="RAM-High-Range">RAM-High-Range</option>
                <option value="RAM-Low-Range">RAM-Low-Range</option>
               </select>
               <select name="powersupply" onChange={change}>
                <option value="PS-Mid-Range">PS-Mid-Range</option>
                <option value="PS-High-Range">PS-High-Range</option>
                <option value="PS-Low-Range">PS-Low-Range</option>
               </select>
               <input type="submit" value="OrderPC" onClick={submit}/>
        </form>
        </>
    )


}