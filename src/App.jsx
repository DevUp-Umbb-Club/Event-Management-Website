import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import './App.css';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
