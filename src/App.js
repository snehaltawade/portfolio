import './App.css';
import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import Contact from './routes/Contact';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Work from './routes/Work';

  
function App() {
  return (
    <>
     <Navbar></Navbar>
     <Home/>
      <About/>
       <Work/>
       <Project/>
      {/* <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes> */}
      <Footer/>
    </>
  );
}

export default App;
