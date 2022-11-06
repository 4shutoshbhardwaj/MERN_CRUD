import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import Navbar from './components/Navbar';
import Ashutoshbhardwaj from './components/Ashutoshbhardwaj';
import AllUsers from './components/AllUsers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Ashutoshbhardwaj/>}/>
        <Route path="/all" element={<AllUsers/>}/>
        <Route path="/add" element={<AddUser/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
