import React from 'react';
import './App.css';
import AddStage from './components/AddStage';
import ShowStages from './components/ShowStages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarMenu from './components/NavBarMenu';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu />
        <Routes>
          <Route exact path='/' element={<ShowStages/>} />
          <Route exact path='/addStage' element={<AddStage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
