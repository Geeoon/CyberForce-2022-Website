import './App.css';
import { Routes, Route, BrowserRouter, createContext } from 'react-router-dom';
import Home from './Home';
import Error404 from './Error404';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import SolarGen from './SolarGen';
import Manufacturing from './Manufacturing';
import Login from './Login';
import Admin from './Admin';
import { useState, useEffect } from 'react';

function App() {
  const [error, set_error] = useState(null);

  useEffect(() => {
    if (!navigator.cookieEnabled) {
      set_error("Cookies need to be enabled to use this website.");
      return;
    }
  }, []);

  if (error) {
    return error;
  }

  return (
    <BrowserRouter>
      <div id='body'>
        <Header />
        <div id='content'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/solargen' element={<SolarGen />}/>
            <Route path='/manufacturing' element={<Manufacturing />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/admin' element={<Admin />}/>
            <Route path='*' element={<Error404 />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
