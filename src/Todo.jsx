import React,{useState} from 'react'

function Todo() {
    const[tasks,setTasks]=useState(["Eat"])
    const[newTasks,setNewTasks]=useState("");
    function handleInput(event)
    {
        setNewTasks(event.target.value)
    }
    function addTask(){
        if(newTasks.trim()!==""){
        setTasks(t=>[...t,newTasks])
        setNewTasks("")
        }
    }
    function deleteTask(index)
    {
        const update=tasks.filter((element,i)=> i!==index)
        setTasks(update)
    }
  return (
    <div className="todolist">
      <div className="top-list">
      <h2>To-Do-List</h2>
      
        <input type="text" value={newTasks}onChange={()=>handleInput(event)}placeholder='Enter Tasks...' />
        <button className="addBtn"onClick={addTask}>Add Task</button>
      </div>
      <ol>
       { tasks.map((task,index)=><li key={index}>{task} 
                                <button className="del-btn"onClick={()=>deleteTask(index)}>delete</button></li>
       
       
    )}
      </ol>
      </div>
    
  )
}

export default Todo
