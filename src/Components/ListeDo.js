import React from 'react'
import { useState } from 'react'
import Task from './Task'
import { v4 as uuidv4 } from 'uuid';

export default function ListeDo() {
  const[tasks,settasks]=useState([
    {id:uuidv4(),nom:'Watch TV'},
    {id:uuidv4(),nom:'Study'},
    {id:uuidv4(),nom:'Eat Lunch'}
  ])
  const [task,setTask]=useState('');
  const addTask=()=>{
    if (task.length==0){
      alert("Give a name to your new task")
    }
    else {
    let ntasks=[...tasks];
    let ntask={};
    ntask.id=uuidv4();
    ntask.nom=task;
    ntasks.push(ntask);
    settasks(ntasks);
    setTask('');
    }
  }
  const deleteTask=(idp)=>{
    let ntasks=tasks.filter((t)=>{return t.id!=idp})
    settasks(ntasks);
  }
  let doneTask=(event)=> {

    console.log(event.target.parentNode.parentNode.style="margin:10px;background-color:rgb(38, 228, 0);padding:0px 20px")
  }
  return (
    <div>
      <h1>Tasks To Do</h1>
        <form>
            <input type="text" id='adb2' value={task} 
                   onChange={(e)=>{setTask(e.target.value)}} />    
                   <input type="button" id='adb' onClick={addTask} value=" ➕ Add" />
        </form>
        <br></br>
        <ul>
          {
            tasks.map((t)=>{
              return <li key={t.id}><Task delf={()=>deleteTask(t.id)} donef={doneTask} txt={t.nom}/></li>
            })
          }
        </ul>
    </div>
  )
}
