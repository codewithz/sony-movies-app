import React, { Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import MoviesComponent from './components/MoviesComponent';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import MovieForm from './components/MovieForm';
import LoginForm from './components/LoginForm';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>

        <main className="container">
          <Navbar />
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies" component={MoviesComponent} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>


        </main>
      </BrowserRouter >
    </React.Fragment >
  );
}

export default App;
