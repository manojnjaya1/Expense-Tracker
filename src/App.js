//import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
// import Expense from './components/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
//import Chart from './components/Chart/Chart';
const DUMMY_EXPENSES = [
  {id:'e1', title: 'Car Insurance', amount: 294, date: new Date(2022, 7, 7) },
  { id:'e2',title: 'Hospital', amount: 400, date: new Date(2022, 7, 7) },
  { id:'e3',title: 'Groceries', amount: 43, date: new Date(2022, 7, 7) },
  { id:'e4',title: 'Car Insurance', amount: 294, date: new Date(2022, 7, 7) }
];
const App=()=> {
 const [expenses, setExpenses] =useState(DUMMY_EXPENSES);
  const addExpenseHandler=(expense)=>{
   
    setExpenses((prevExpenses)=>{
      return[expense, ...prevExpenses];
    });
  };
  return (
   
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
    
      <Expenses items={expenses}/>
    </div>

  );
};

export default App;
