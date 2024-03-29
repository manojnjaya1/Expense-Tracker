import React, { useState } from "react";
import './ExpenseForm.css';
//import { useState } from 'react';
const ExpenseForm = (props) => {
    const[enteredTitle,setEnteredTitle]= useState('');
    const[enteredAmount,setEnteredAmount]= useState('');
    const[enteredDate,setEnteredDate]= useState('');

// const[userInput,setUserInput] =useState({
//     entredTitle:'',
//     entredAmount:'',
//     entredDate:''
// })

    const titleChangeHandler = (event) => {
         setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     entredTitle:event.target.value
        // })
        // setUserInput((prevState)=>{
        //    return{ ...prevState,
        //     entredTitle:event.target.value};
        // });


    };
    const amountChangeHandler = (event) => {
         setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     entredAmount:event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return{ ...prevState,
        //      entredAmount:event.target.value};
        //  });
    }
    const dateChangeHandler = (event) => {
         setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     entredDate:event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return{ ...prevState,
        //      entredDate:event.target.value};
        //  });
    }
const submitHandler=(event)=>{
event.preventDefault();
   const expenseData={
title:enteredTitle,
amount: +enteredAmount,
date:new Date(enteredDate),
   };
  // console.log(expenseData);
  props.onSaveExpenseData(expenseData);
   setEnteredTitle('');
   setEnteredAmount('');
   setEnteredDate('');
}

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onInput={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onInput={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2021-01-01" max="2024-12-31"value={enteredDate} onInput={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;