import React from "react";
import "./TaskRow.css";

function TaskRow({ task }) {
  const statusClass = task.status.toLowerCase().replace(" ", "-");
  const availabilityClass = task.availability.toLowerCase().replace(" ", "-");

  return (
    <tr>
      <td>{task.task}</td>
      <td>{task.assignedTo}</td>
      <td> <span className={`availability-text availability-${availabilityClass}`}>   {task.availability} </span>
      </td>
      <td>
        <span className={`status-text status-${statusClass}`}> {task.status} </span>
      </td>
      <td>
        <button className="modifybtn" onClick={() => alert("Modify button clicked!")}>
         Modify
        </button>
        <button className="removebtn" onClick={() => alert("Remove button clicked!")}>
          Remove
        </button>
      </td>
    </tr>
  );
}

export default TaskRow;
