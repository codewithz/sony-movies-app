import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

import Pagination from './common/Pagination';
import { paginate } from './utils/paginate';
import ListGroup from './common/ListGroup';
// import { getGenres } from '../services/fakeGenreService';
import { getGenres } from '../services/genreService';
// import { getMovies } from '../services/fakeMovieService'
import { getMovies, deleteMovie } from '../services/movieService';
import MoviesTable from './MoviesTable';
import { Link } from 'react-router-dom';


export default function MoviesComponent() {

    const [movies, setMovies] = useState([]);
    const [pageSize, setPageSize] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    const [genres, setGenres] = useState([])
    const [selectedGenre, setSelectedGenre] = useState(null)

    useEffect(() => {
        loadGenres();
        loadMovies();
    }, [])

    const loadGenres = async () => {
        const promise = getGenres();
        const result = await promise;
        console.log(result)

        setGenres([{ _id: '', name: 'All Genres' }, ...result.data]);

    }

    const loadMovies = async () => {
        const promise = getMovies();
        const result = await promise;
        setMovies(result.data);
    }

    const handleDelete = async (movie) => {
        const originalMovies = movies;
        const filteredMovies = movies.
            filter((m) => movie._id !== m._id);
        setMovies(filteredMovies);

        try {
            await deleteMovie(movie._id)
        } catch (error) {
            if (error.response && error.response.status === 404) {
                toast.error("Movie [" + movie.name + "] is already deleted from db.");
                setMovies(originalMovies);
            }
        }

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

    const handleGenreSelect = (genre) => {
        setSelectedGenre(genre.name)
        setCurrentPage(1)
    }

    if (count === 0) {
        return <p>There are no movies in the database</p>
    }

    const filteredMovies = selectedGenre && selectedGenre !== 'All Genres' ?
        movies.filter(m => m.genre.name === selectedGenre) : movies;

    const paginatedMovies = paginate(filteredMovies, currentPage, pageSize)

    return (
        <div className="row" style={{ marginTop: '20px' }}>
            <div className="col-2">
                <ListGroup
                    items={genres}
                    onItemSelect={handleGenreSelect}
                    selectedItem={selectedGenre}
                />
            </div>
            <div className="col">
                <Link
                    to="/movies/new"
                    className="btn btn-primary"
                    style={{ marginBottom: 20 }}
                >
                    New Movie
                </Link>
                <p>Showing {filteredMovies.length} movies in database</p>

                <MoviesTable
                    movies={paginatedMovies}
                    onDelete={handleDelete}
                    onLike={handleLike}
                />

                <Pagination
                    itemsCount={filteredMovies.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange} />
            </div>

        </div>
    )
}
