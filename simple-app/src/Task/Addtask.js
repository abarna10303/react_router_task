import React, { useState, useContext } from "react";
import { context } from "../Context/Context";
import Header from "../Header/Header";
const Addtask = () => {
  let { state, dispatch } = useContext(context);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
 const [taskPrority, setTaskPrority] = useState(false);
  const [taskCompletion, setTaskCompletion] = useState(false);
  const handlingInput = (data) => {
    switch (data.target.name) {
      case "taskname":
        return setTaskName(data.target.value);
      case "taskdescription":
        return setTaskDescription(data.target.value);
      case "taskprority":
        return setTaskPrority(data.target.checked);
      case "taskcompletion":
        return setTaskCompletion(data.target.checked);
      default:
        return;
    }
  };
  const handlingSubmit = (ev) => {
    ev.preventDefault();
    
    
    var tasks1 = [
      ...state.task,
      { taskName, taskDescription, taskPrority, taskCompletion },
    ];

    dispatch({
      type: "Add_Task",
      payload: tasks1,
    });
    // console.log(ev.target.taskname);

    ev.target.taskname.value = "";
    ev.target.taskdescription.value = "";
    ev.target.taskprority.checked = false
    ev.target.taskcompletion.checked = false
  };
  return (
    <div>
      <Header />
      <div>
        <form onSubmit={(event)=>handlingSubmit(event)}>
          <h1>ADD TASK</h1>
          <div>
            <label>Task Name</label>
            <input type={"text"} onChange={(event)=>handlingInput(event)} name="taskname" />
          </div>
          <div>
            <label>Task Description</label>
            <input
              type={"text"}
              onChange={(event)=>handlingInput(event)}
              name="taskdescription"
            />
          </div>
          <div>
            <label>Prority</label>
            <input
              type={"checkbox"}
              onChange={(event)=>handlingInput(event)}
              name="taskprority"
            />
          </div>
          <div>
            <label>Completion</label>
            <input
              type={"checkbox"}
              onChange={(event)=>handlingInput(event)}
              name="taskcompletion"
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Addtask;