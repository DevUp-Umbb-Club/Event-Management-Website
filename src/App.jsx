/*import { Routes, Route } from 'react-router-dom';
//import Login from './pages/Login/Login';
/import './App.css';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Error404 from './pages/Error404/Error404';
import TodoTable from './components/Todolist-Table/TodoTable'; 

//function App() {
  return (
   
    <TodoTable />

  );
}
;
 export default App;*/

 
 import React from "react";
 import TaskTable from "./components/TodoTable/TodoTable.jsx";
 import "./App.css";
 function App() {
   return (
     <div>
       <h2 className="text-xl pb-10 font-bold text-stone-700 my-4">To Do List</h2>
       <p className="text-xl pt-10 font-bold text-stone-700 my-4">List of all DevUp Mebers and Theire Availability</p>
       <TaskTable />
     </div>
   );
 }
 
 export default App;
 