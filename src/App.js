import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';
import MoviesComponent from './components/MoviesComponent';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NotFound from './components/NotFound';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <main className="container">
          <Switch>
            <Route path="/movies" component={MoviesComponent} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>


        </main>
      </BrowserRouter >
    </React.Fragment >
  );
}

export default App;
