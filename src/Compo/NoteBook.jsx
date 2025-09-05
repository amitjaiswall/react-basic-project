
import { useState } from "react";

export default function NoteBook(props){
const[enterT,setEnterT]=useState("");
const[enterA,setEnterA]=useState("");
const[enterD,setEnterD]=useState("");


const titleChange=(event)=>{
    setEnterT(event.target.value)
}

const amountChange=(event)=>{
    setEnterA(event.target.value)
}

const datChange=(event)=>{
    setEnterD(event.target.value)
}

    const submitHandler=(event)=>{
        event.preventDefault();
        const data={
            title:enterT,
            date:enterD,
            price:enterA,
        }
        props.liftstate(data);

    }

    return(
        <>
           <form onSubmit={submitHandler}>
         <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={titleChange} />

                     <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" onChange={amountChange}/>

                     <label htmlFor="dat">Date</label>
            <input type="date" id="dat" onChange={datChange}/>
            <button type="submit">Add Expense</button>
           </form>
        </>
    )
}   