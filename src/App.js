import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import Login from './components.jsx/Login';
import Nav from './components.jsx/Nav';
import About from './components.jsx/About';
import Project from './components.jsx/Project';
import Contact from './components.jsx/Contact';
import Resume from './components.jsx/Resume';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}></Route>
        <Route path="/NAN" element={<Nav/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>



   </Routes>
    </BrowserRouter>
  );
}

export default App;
