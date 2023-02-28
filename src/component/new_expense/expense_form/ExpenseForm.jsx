import React, { useState } from "react";
import './ExpenseForm.css';
const ExpenseForm=(props)=>
{

    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState(0);
    const [enteredDate,setEnteredDate]=useState(new Date());
    const onTitleChange=(event)=>
    {
        // console.log(event.target.value)
        setEnteredTitle(event.target.value)
    }
    const onAmountChange=(event)=>
    {
        // console.log(event.target.value)
        setEnteredAmount(event.target.value)
    }
    const onDateChange=(event)=>
    {
        setEnteredDate(event.target.value);
    }
    const onExpenseSubmit=(event)=>
    {
            event.preventDefault();
            console.log('call from form',enteredTitle,enteredAmount,enteredDate)
            const new_expense = {
                title:enteredTitle,
                amount : enteredAmount,
                date:new Date(enteredDate)
            }
            props.onSave(new_expense);
    }
    return(
        <form onSubmit={onExpenseSubmit}>
            <div className="new-expense__controls">
                {/* title */}
                    <div className="new-expense__control">
                        <label htmlFor="title">TITLE</label>
                        <input type="text"  name="title" id="title"  value={enteredTitle} onChange={onTitleChange}></input><br></br>
                </div>
                {/* amount */}
                <div className="new-expense__control">
                        <label htmlFor="amount  ">AMOUNT</label>
                        <input type="number" name="amount" id="amount" min="0" value={enteredAmount} onChange={onAmountChange}></input><br></br>
                </div >
                 {/* date*/}
                <div className="new-expense__control">
                        <label htmlFor="date">DATE</label>
                        <input type="date" name="date" id="date" value={enteredDate} onChange={onDateChange}></input><br></br><br></br>
                </div>
          </div>
            {/* button */}
          <div className="new-expense__actions">
                <button type="submit">ADD</button>
                

          </div>
          <div><button>CANCEL</button></div>
        </form>
    )
}
export default ExpenseForm;