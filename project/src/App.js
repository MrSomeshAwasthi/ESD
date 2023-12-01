import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<div> <Register /></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;