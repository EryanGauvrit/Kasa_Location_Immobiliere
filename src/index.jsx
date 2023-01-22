import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/normalize.css';
import './style/main.scss';
import Home from './pages/Home';
import About from './pages/About';
import LocationDetails from './pages/LocationDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/"
          element={<Home />}
        />
        <Route exact path="/about"
          element={<About />}
        />
        <Route exact path={'/location/:id'}
          element={<LocationDetails />}
        />
        <Route path='*'
          element={<Error />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>

  </React.StrictMode>
);

