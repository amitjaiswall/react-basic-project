import NoteBook from './Compo/NoteBook'
import './App.css'
import Expense from "./Expense/Expense"
import { useState } from 'react'

function App() {
const dummy_data = [
  { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
  { id: 2, title: "Book", date: new Date(2024, 8, 25), price: 10 },
  { id: 3, title: "Pen", date: new Date(2025, 2, 10), price: 1 },
  { id: 4, title: "Laptop", date: new Date(2024, 9, 17), price: 200 },
];

const[exp,setExp]=useState(dummy_data)

  const stateHandler=(data)=>{
     const mod_data={...data,id:Math.random.toString()};
     setExp((prevState)=>{
      return[data,...prevState]
     })
  }

  return (
    <>
    
    <NoteBook liftstate={stateHandler}/>
  <Expense exp={exp}/>
    </>
  )
}

export default App
