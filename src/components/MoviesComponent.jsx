import React, { useState } from 'react'
import { getMovies } from '../services/fakeMovieService'

export default function MoviesComponent() {

    const [movies, setMovies] = useState(getMovies());

    const handleDelete = (movie) => {
        const filteredMovies = movies.
            filter((m) => movie._id !== m._id);
        setMovies(filteredMovies);
    }
    return (

        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map(movie => (
                        <tr>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm m-2"
                                    onClick={() => handleDelete(movie)}
                                >
                                    Delete
                                </button>

                            </td>
                        </tr>
                    ))
                }


            </tbody>
        </table>
    )
}
