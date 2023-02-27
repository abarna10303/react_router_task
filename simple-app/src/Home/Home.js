import React, { useState } from "react";
import Header from "../Header/Header";
import { useContext } from "react";
import { context } from "../Context/Context";
import '../Login/Login.scss';
const Home = () => {
  var { state, dispatch } = useContext(context);
  let [prorityFilter,setPrority]=useState(false);
  let [completionFilter,setCompletion]=useState(false);
  var deleteValues=(index)=>
  {
   let task=state.task;
    state.task.splice(index,1);
    state.task=task;
    dispatch({
      type:'delete',
      payload:task,
    })
    console.log(task);
  }
  let tasks=[];
  if(prorityFilter===true && completionFilter===false)
  {
    tasks= state.task.filter((value)=>
    {
      return value.taskPrority===true;
    })
  }
  else if(completionFilter===true && prorityFilter===false)
  {
    tasks=state.task.filter((value)=>{
      return value.taskCompletion===true;
    })
  }
  else if(prorityFilter===true && completionFilter===true)
  {
    tasks=state.task.filter((value)=>{
      return value.taskPrority===true && value.taskCompletion===true;
    })
  }
  else 
  {
    tasks=state.task;
  }
  return (
    <div className="task-container">
      <Header />
      <div className="task-row">
        <div>
        <h1>Add Tasks</h1>
          <input type={'checkbox'} onChange={(ev)=>setPrority(ev.target.checked)} /><label>Prority</label>
          <input type={'checkbox'} onChange={(ev)=>setCompletion(ev.target.checked)} /><label>Completion</label>
        </div>
        {tasks.map((value, index) => {
          return (
            <div key={index} className='task-col'>
              <p>Task - {index + 1}</p>
              <p>Task Name{value.taskName}</p>
              <p>Task Description{value.taskDescription}</p>
              <p>
                <span>Task Prority</span>
                <input
                  type={"checkbox"}
                  checked={value.taskPrority}
                  onChange={(ev) =>
                    dispatch({
                      type:'Update',
                      payload:{
                        event:ev.target.checked,
                        index,
                        key:'taskPrority'
                      }
                    })
                  }
                />
              </p>
              <p>
                <span>Task Completion</span>
                <input
                  type={"checkbox"}
                  checked={value.taskCompletion}
                  onChange={(ev) =>
                    dispatch({
                      type:'Update',
                      payload:{
                        event:ev.target.checked,
                        index,
                        key:'taskCompletion'
                      }
                    })
                  }
                />
              </p>
              <button onClick={()=>deleteValues(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
