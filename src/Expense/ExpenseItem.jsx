

export default function ExpenseItem(props){
    return(
        <>
        
            <p>Details:</p>
            <p>{props.title}</p>
            <p>{props.price}</p>
            <p>{props.date}</p>
        
        </>
    )
}