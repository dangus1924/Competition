import React from 'react';
import './App.css';
import Nav from './components/Nav';
import  Home from './components/Home';
import Register from './components/Register';
import About  from './components/About';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Nav />
     <Route path="/" component={Home} exact />
     <Route path="/register" component={Register} />
     <Route path="/about" component={About} />
    </div>
  );
}

export default App;
