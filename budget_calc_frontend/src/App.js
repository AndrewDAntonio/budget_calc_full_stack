import React, { useState, useEffect } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'








function App() {
  


  //************** state values  **************/
  // all expenses, add expense
  const [expenses, setExpenses] = useState([])
  // single expense
  const [charge, setCharge] = useState('')
  // single amount
  const [amount, setAmount] = useState('')
  // alert
  // const[alert, showAlert] = useState({show: false})
// ************* initial fetch **************/
  useEffect(() => {
    
    fetchExpenses();
    }, [])
  // ********* fetch functions ********** //
  function fetchExpenses() {
    fetch('http://localhost:3000/expenses')
    .then(r => r.json())
    .then(data => setExpenses(data))
  };

  function postExpense(expense) {
    
    fetch('http://localhost:3000/expenses', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(expense)
    })
    .then(r => r.json())
    .then(newExpense => {
      setExpenses([...expenses, newExpense])
      setAmount('')
      setCharge('')
    })


  }

  function deleteExpense(id) {
    fetch(`http://localhost:3000/expenses/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(deletedExpense => {
      const spliceIndex = expenses.findIndex(ele => ele.id === deletedExpense.id)
        expenses.splice(spliceIndex,1)
        setExpenses([...expenses])
        
        
    })
  }
  
  
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
      const singleExpense = {charge, amount}
      postExpense(singleExpense)
    }
    else {
      //handle calling an Alert
    }
  }

  const handleDelete = e => {
    e.preventDefault();
    const id = e.target.closest('.clear-btn').value
    deleteExpense(id)
    

    
  }


  return (
    
    <>
      {/* {alert.show && <Alert type={alert.type} text={alert.text}/>} */}
      <h1>Budget Calculator</h1>
      <main className='App'>
        <ExpenseForm charge={charge} amount={amount} handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit} />
        <ExpenseList expenses={expenses} handleDelete={handleDelete}/>
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
