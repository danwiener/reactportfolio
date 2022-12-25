import React from 'react'
import logo from './logo.svg';
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import './stylesheets/home.css'
import './stylesheets/header-footer.css'
import './stylesheets/carousel.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/projects' exact element={<Projects />}/>
        <Route path='/resume' exact element={<Resume />}/>
        <Route path='/contact' exact element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
