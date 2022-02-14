import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
            <Link class="navbar-brand" to="/movies">Sony Movies</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <NavLink className="nav-link" to="/">Movies</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/customers">Customers</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>


                </ul>
            </div>
        </nav>

    )
}