 //import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expense=[
    {title: 'Car Insurance', amount:294, date:new Date(2022,7,7)},
    {title: 'Hospital', amount:400, date:new Date(2022,7,7)},
    {title: 'Groceries', amount:43, date:new Date(2022,7,7)},
    {title: 'Car Insurance', amount:294, date:new Date(2022,7,7)}
  ];
  return (
    <div >
    <h2>Lets begin</h2>
     <ExpenseItem title={expense[0].title}
     amount={expense[0].amount}
     date={expense[0].date}> </ExpenseItem>
     <ExpenseItem title={expense[1].title}
     amount={expense[1].amount}
     date={expense[1].date}> </ExpenseItem>
     <ExpenseItem title={expense[2].title}
     amount={expense[2].amount}
     date={expense[2].date}> </ExpenseItem>
    </div>
     
  );
}

export default App;
 