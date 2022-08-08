//import logo from './logo.svg';
import './App.css';
// import Expense from './components/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const App=()=> {
  const expenses = [
    { title: 'Car Insurance', amount: 294, date: new Date(2022, 7, 7) },
    { title: 'Hospital', amount: 400, date: new Date(2022, 7, 7) },
    { title: 'Groceries', amount: 43, date: new Date(2022, 7, 7) },
    { title: 'Car Insurance', amount: 294, date: new Date(2022, 7, 7) }
  ];
  return (
   
    <div>
      <NewExpense/>
    
      <Expenses items={expenses}/>
    </div>

  );
}

export default App;
