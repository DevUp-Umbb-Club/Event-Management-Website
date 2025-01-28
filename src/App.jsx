import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import './App.css';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Error404 from './pages/Error404/Error404';
 import Event from './pages/Event/Event.jsx'; 



function App() {
  return (
 
    <div className="App">
      <Routes>
   
        <Route path="/" element={<Event />} />
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
    
  );
}

export default App;
