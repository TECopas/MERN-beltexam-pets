import React from 'react';
import './App.css';

import { Router } from '@reach/router'

import PetList from "./components/PetList"
import AddPet from "./components/AddPet"
import Editpet from "./components/EditPet"
import PetDetail from "./components/PetDetail"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <PetList path="/"/>
        <AddPet path="/pets/new"/>
        <Editpet path="/pets/edit/:_id"/>
        <PetDetail path="/pets/:_id"/>
      </Router>
      </header>
    </div>
  );
}

export default App;
