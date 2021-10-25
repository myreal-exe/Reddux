import React from 'react';
import './App.css';
import { Feed } from './components/Feed/Feed';
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
      <Feed/>
    </div>
  );
}

export default App;
