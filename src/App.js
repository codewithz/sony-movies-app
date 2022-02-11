import logo from './logo.svg';
import './App.css';
import MoviesHome from './components/MoviesHome';
import { BrowserRouter } from 'react-router-dom';
import React, { Fragment } from 'react';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <main className="container">

          <MoviesHome />

        </main>
      </BrowserRouter >
    </React.Fragment >
  );
}

export default App;
