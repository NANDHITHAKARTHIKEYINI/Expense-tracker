import React from "react";
import './ExpenseItem.css';

import ExpenseDate from "../expense_date/Expense_date";
const ExpenseItem=(props)=>
{
//    let {date=new Date()}=props
//     const [title,newTitle]=useState(props.title);
//     const [amount,newAmount]=useState(props.amount);
//    function onChangeClick(event)
//    {
//     console.log('ExpenseItemExpenseItem');
//     newTitle('updated');
//     newAmount(100);
    
//    }
    return(
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">
                ${props.amount}
            </div>
            </div>
            {/* <button onClick={onChangeClick}>Change</button> */}
        </div>
    )
}
export default ExpenseItem;