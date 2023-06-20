import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const[text,setText]=useState('')
    const[amount,setAmount]=useState('')
    const onSubmit=(e)=>
    {
        e.preventDefault()
        if( !text & !amount){
            alert("Enter data")
            return
        }
        onAdd({text,amount})
        setText("")
        setAmount("")
    }
  return (
    <>
    <h2>Add Transaction</h2>
    <form onSubmit={onSubmit}>
        <div className='form-control'>
            <label><b>Text</b></label>
            <input 
                type="text"
                value ={text}
                placeholder='Enter Text'
                onChange={(e)=>setText(e.target.value)}
            ></input>
        </div>
        <div className='form-control'> 
            <label><b>Amount</b></label>
            <input 
                type="number"
                value ={amount}
               // placeholder=' Expense-negative'
                onChange={(e)=>setAmount(parseFloat(e.target.value))}
            ></input>
        </div>
        <input className='btn-block' type="submit" value="Save"></input>
    </form>
    </>
  )
}

export default AddTask
