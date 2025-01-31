import React, { useState } from "react";
import TaskRow from "../TaskRow/TaskRow.jsx";
import "./ToDoTable.css";
import { FaCog, FaFilter } from "react-icons/fa";
const tasksData = [
  { task: "Write an email to recteur", assignedTo: "Abdeslam", availability: "Available", status: "Done" },
  { task: "Write an email to recteur", assignedTo: "Abdeslam", availability: "Not Available", status: "In Progress" },
  { task: "Write an email to recteur", assignedTo: "Abdeslam", availability: "Available", status: "Not Done" },
  { task: "Write an email to recteur", assignedTo: "Abdeslam", availability: "Available", status: "Done" },
  { task: "Write an email to recteur", assignedTo: "Abdeslam", availability: "Not Available", status: "In Progress" },
  { task: "Write an email to recteur", assignedTo: "Abdeslam", availability: "Available", status: "Done" },
];

function TodoTable() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const handleSearchChange = (e) => setSearch(e.target.value.toLowerCase());
  const handleFilterChange = (e) => setFilter(e.target.value);

  const filteredTasks = tasksData.filter((task) => {
    const matchesSearch = task.assignedTo.toLowerCase().includes(search) || task.task.toLowerCase().includes(search);
    const matchesFilter = filter === "All" || task.availability === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <div className="controls">
      
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={handleSearchChange}
        />
        <select value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>
        <FaFilter style={{ marginRight: "5px", marginTop: "8px",color:"gray", fontSize: "16px" }} />
        <button class="taskbtn" onClick={() => alert("New task button clicked!")}>
         
          ADD NEW TASK </button>
          <FaCog style={{ marginRight: "5px",color:"gray", marginTop: "8px", fontSize: "16px" }} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Assigned To</th>
            <th>Availability</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <TaskRow key={index} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoTable;
