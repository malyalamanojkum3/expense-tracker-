import React from 'react'

const HeaderFun = ({tasks}) => {
  let income=0
  let expense=0
  tasks.amount>=0 ? (income+=tasks.amount) : (expense+=tasks.amount)
  
  return (
    <div>
     
     
    </div>
  )
}

export default HeaderFun
