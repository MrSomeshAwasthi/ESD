import Calendar from 'react-calendar';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import MyCalendar from './Components/MyCalendar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/cal' element={<MyCalendar/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
