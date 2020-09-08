import React, { useState } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import {v4 as uuid} from 'uuid'


const initialExpenses = [
  {id:uuid(), charge:`rent`, amount:1000},
  {id:uuid(), charge:`car payment`, amount:2000},
  {id:uuid(), charge:`credit card bill`, amount:3000}
];



function App() {

  //************** state values  **************/
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses)
  // single expense
  const [charge, setCharge] = useState('')
  // single amount
  const [amount, setAmount] = useState('')
  // alert
  const[alert, showAlert] = useState({show: false})

  //************** functionality  **************/
  const handleCharge = e => {
    setCharge(e.target.value)
  }

  const handleAmount = e => {
    setAmount(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      const singleExpense = {id: uuid(), charge, amount}
      setExpenses([...expenses,singleExpense])
      setCharge('')
      setAmount("")
    }
    else {
      //handle calling an Alert
    }
  }

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text}/>}
      <h1>Budget Calculator</h1>
      <main className='App'>
        <ExpenseForm charge={charge} amount={amount} handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit}/>
        <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        Total Spending: <span className="total">
          ${expenses.reduce((acc, curr) =>{
            return acc += parseInt(curr.amount)
          },0)}
        </span>
      </h1>
      
    </>
  );
}

export default App;
