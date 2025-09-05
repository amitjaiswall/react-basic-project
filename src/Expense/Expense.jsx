


import { useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./EXpenseFilter"
export default function Expense(props){

const[year,setYear]=useState("2023")

const yearHandler=(y)=>{
    setYear(y)
}

const filterItem=props.exp.filter((exps)=>{
    return exps.date.getFullYear.toString()===year;
})

    return(
    <>
    <ExpenseFilter
    value={year}
    selectYear={yearHandler}
    />
    {filterItem.map((expe)=>{
         return(
            
  <ExpenseItem key={expe.id} title={expe.title} date={expe.date} price={expe.price}/>
        
         )
    })
}
  

    </>
    )


}