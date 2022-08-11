import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Detail from './components/Detail'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Header/>} path="/"/>
        </Routes>
        <Routes>
          <Route element={<Home/>} path="/"/>
        </Routes>
        <Routes>
          <Route element={<Header/>} path="/detail"/>
        </Routes>
        <Routes>
          <Route element={<Detail/>} path="/detail"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/*
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
*/