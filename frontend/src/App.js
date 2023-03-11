import React, {useState, useEffect} from 'react';
import './App.css';
import AddStage from './components/AddStage';
import ShowStages from './components/ShowStages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarMenu from './components/NavBarMenu';
import StageDetail from './components/StageDetail';
import UpdateStage from './components/UpdateStage';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu />
        <Routes>
          <Route exact path='/' element={<ShowStages/>} />
          <Route exact path='/addStage' element={<AddStage/>} />
          <Route exact path='/:id/' element={<StageDetail/>} />
          <Route exact path='/:id/update' element={<UpdateStage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
