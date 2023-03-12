import React, {useState, useEffect} from 'react';
import './App.css';
import AddStage from './components/AddStage';
import ShowStages from './components/ShowStages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarMenu from './components/NavBarMenu';
import StageDetail from './components/StageDetail';
import UpdateStage from './components/UpdateStage';
import ShowMachines from './components/ShowMachines';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu />
        <Routes>
          <Route exact path='/machine' element={<ShowMachines/>} />
          <Route exact path='/stage' element={<ShowStages/>} />
          <Route exact path='/addStage' element={<AddStage/>} />
          <Route exact path='/stage/:id/' element={<StageDetail/>} />
          <Route exact path='/stage/:id/update' element={<UpdateStage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
