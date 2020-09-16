import React from 'react';
import Navbar from './componentes/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import HeroSection from './componentes/HeroSection';


function App() {
  return (
  <>
  <Router>
      <Navbar />
      <HeroSection/>
      <Switch>
        <Route path='/' exact />
      </Switch>
  </Router>
  </>
  );
}

export default App;
