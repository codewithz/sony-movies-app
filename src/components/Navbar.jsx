import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(props) {

    const { user } = props;
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <Link className="navbar-brand" to="/movies">Sony Movies</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Movies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/customers">Customers</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
                    </li>
                    {!user && (
                        <React.Fragment>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>
                        </React.Fragment>
                    )
                    }
                    {user && (
                        <React.Fragment>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">
                                    {user.name}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/logout">
                                    Logout
                                </NavLink>
                            </li>
                        </React.Fragment>
                    )
                    }


                </ul>
            </div>
        </nav>

    )
}