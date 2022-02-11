import React from 'react'
import Like from './common/Like';
import { Link } from 'react-router-dom';

export default function MoviesTable(props) {

    const { movies, onDelete, onLike } = props;

    return (
        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map(movie => (
                        <tr key={movie._id}>
                            <td>
                                <Link to={`/movies/${movie._id}`}>
                                    {movie.title}
                                </Link>
                            </td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like liked={movie.liked}
                                    onClick={() => onLike(movie)} />
                            </td>

                            <td>
                                <button
                                    className="btn btn-danger btn-sm m-2"
                                    onClick={() => onDelete(movie)}
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
