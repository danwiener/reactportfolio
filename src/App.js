import React from 'react'
import logo from './logo.svg';
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import './stylesheets/home.css'
import './stylesheets/header-footer.css'
import './stylesheets/carousel.css'
import './stylesheets/projects-courses.css'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/projects' exact element={<Projects />}/>
        <Route path='/about' exact element={<About />}/>
        <Route path='/contact' exact element={<Contact />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
