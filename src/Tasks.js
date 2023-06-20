import React from 'react'

const Tasks = ({tasks}) => {
  return (
    <div>
      <h2>History</h2>
      
     { tasks.map((task) => 
           <>
           <div className='Task' key={task.id}>  
           <div>{task.text}: </div>
           <div>{task.amount}</div>
            </div>
           
           </>
      )
     }
    </div>
  )
}

export default Tasks
