import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { SearchBar } from './components/SearchBar/SearchBar';
import { FiltersBar } from './features/filter/FiltersBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchBar/>
      <hr style={{marginTop:"20px",width:"20%"}}/>
      <FiltersBar/>
    </div>
  );
}

export default App;
