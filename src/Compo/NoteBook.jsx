
import { useState } from "react"
export default function NoteBook(props){
const[enterValue,setEnterValue]=useState("");
const[enterNotes,setEnterNotes]=useState("0");
const[enterShow,setEnterShow]=useState("0");
function changeHandler(event){
    setEnterValue(event.target.value)
}
    return(
        <>
        <h2>Note Book</h2>
        <label htmlFor="search">Search Notes:</label>
        <input type="text" id="search" value={enterValue} onChange={changeHandler}/>
        <p>Total Notes: {enterNotes}</p>
        <p>Total Showing: {enterShow}</p>
        </>
    )
}