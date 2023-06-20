import {useState,useEffect} from "react"
import Tasks from "./Tasks"
import Header from "./Header"
import AddTask from "./AddTask"
function App() {
  
  const [tasks,setTasks]=useState([])
  //get Tasks
  useEffect(()=>{
    const getTasks=async()=>{
      const get=await fetchTasks()
      setTasks(get)
    }
    getTasks();
  },[])
  //fetch Tasks
   const fetchTasks=async()=>{
    const res=await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    return data
   }
  //AddTask
    const onAdd=async(task)=>{
      const res = await fetch("http://localhost:5000/tasks",{
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        body : JSON.stringify(task)
      })
      const data=await res.json()
      setTasks([...tasks,data])
      // const id= Math.floor(Math.random()*1000)+1
      // const newTask = {id,...task}
     //  setTasks([...tasks,newTask])
    }
  return (
    <div className="App">
      <Header tasks={tasks}/>
      <Tasks tasks={tasks}/>
      <AddTask onAdd={onAdd}/>
      
    </div>
  );
}

export default App;
