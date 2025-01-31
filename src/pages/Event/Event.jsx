import React from 'react';
import TodoTable from '../../components/TodoTable/TodoTable';
import Navbar from '../../components/Navbar/Navbar';
const Event = () => {
  return (
    <>
      <Navbar />
      <div>
        <h2>To Do List</h2>
        <p>List of all DevUp Members and Their Availability</p>
        <TodoTable />
      </div>
    </>
  );
};

export default Event;
