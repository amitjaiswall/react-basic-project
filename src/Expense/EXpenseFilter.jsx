

export default function ExpenseFilter(props){
function changeHandler(event){
    props.selectYear(event.target.value);
}

    return(
    <>
    <select value={props.value} onChange={changeHandler}>

<option value="2023">2023</option>
<option value="2024">2024</option>
<option value="2025">2025</option>
        </select>
    
    
    
    </>

    )
}