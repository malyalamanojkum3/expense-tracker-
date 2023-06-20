import React from 'react'
import HeaderFun from './HeaderFun'
const Header = ({tasks}) => {
    let income=0
    let expense=0
    tasks.map((tasks)=>
            tasks.amount>=0 ? (income+=tasks.amount) : (expense+=tasks.amount)
            )
        
  return (
    <div>
      <h1>Expense Tracker</h1>
      <h2 style={{marginBottom:0}}>Your Balance:</h2>
      <h2 style={{marginTop:0 ,color:"violet"}} >${income+expense}</h2>
      <div className="inc-exp">
      <div className="income">
      <div>INCOME:</div>
        <div style={{color:'green'}} >${income}</div>
      </div>
       <div className="expense">
        <div>EXPENSE:</div>
        <div style={{color:'red'}}> ${-expense}</div>
       </div>
      </div>
       
    </div>
  )
}

export default Header
