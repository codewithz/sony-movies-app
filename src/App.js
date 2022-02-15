import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';

import MoviesComponent from './components/MoviesComponent';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import MovieForm from './components/MovieForm';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Logout from './components/Logout';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';




function App(props) {

  const [user, setUser] = useState({});


  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      console.log(user)
      setUser(user);

    }
    catch (error) {
      setUser(null);
    }
  }, [])

  return (
    <React.Fragment>
      <BrowserRouter>

        <main className="container">
          <ToastContainer />
          <Navbar user={user} />
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={RegisterForm} />
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
