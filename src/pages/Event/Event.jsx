import React from 'react';
import TodoTable from '../../components/TodoTable/TodoTable';
import Navbar from '../../components/Navbar/Navbar';
import Participant from '../../components/Participant/Participant';

const Event = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '80px', padding: '0 20px' }}> {/* Adjust margin to control navbar gap */}
       
        <Participant />

          <h2 style={{ marginBottom: '10px', fontSize: '24px', fontWeight: 'bold' }}>To Do List</h2>
          <p style={{ marginBottom: '20px', fontSize: '16px' }}>List of all DevUp Members and Their Availability</p>
          <TodoTable />
        </div>
    
    </>
  );
};

export default Event;
