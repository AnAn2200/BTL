import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import SignupPage from './pages/SignupForm';
import Pr1 from './components/Products/Products1/Pr1'
import Pr2 from './components/Products/Products1/Pr2'

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/SignupPage' Component={SignupPage} />
          <Route path='/Pr1' Component={Pr1} />
          <Route path='/Pr2' Component={Pr2} />
        </Routes>
      </Router>
  );
}

export default App;
