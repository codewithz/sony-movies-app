import React, { useState } from 'react'
import { getMovies } from '../services/fakeMovieService'
import Like from './common/Like';
import Pagination from './common/Pagination';

export default function MoviesComponent() {

    const [movies, setMovies] = useState(getMovies());
    const [pageSize, setPageSize] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);

    const handleDelete = (movie) => {
        const filteredMovies = movies.
            filter((m) => movie._id !== m._id);
        setMovies(filteredMovies);
    }

    const count = movies.length;

    const handleLike = (movie) => {
        const moviesClone = [...movies];
        const index = moviesClone.indexOf(movie);
        moviesClone[index] = { ...movies[index] }
        moviesClone[index].liked = !moviesClone[index].liked;
        setMovies(moviesClone);
    }

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    if (count === 0) {
        return <p>There are no movies in the database</p>
    }
    return (
        <div>
            <p>Showing {count} movies in database</p>
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
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like liked={movie.liked}
                                        onClick={() => handleLike(movie)} />
                                </td>

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
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange} />
        </div>
    )
}
