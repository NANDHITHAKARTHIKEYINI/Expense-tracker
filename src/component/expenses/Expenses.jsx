import React from "react";
import './Expenses.css'
import ExpenseItem from "./expense_item/ExpenseItem"
const Expenses=(props)=>
{
    const expenses=props.expenses;
    return(
        <div className="expenses">
            {
                expenses.map((exp)=>(
                    <ExpenseItem 
                    key={exp.id}
                    title={exp.title}
                    amount={exp.amount}
                    date={exp.date}
                      />
                ))}
                      
        </div>
    )

}
export default Expenses;