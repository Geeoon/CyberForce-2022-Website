import './App.css';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Error404 from './Error404';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div id='body'>
        <Header />
            <div id='content'>
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='*' element={<Error404 />}/>
              </Routes>
            </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
