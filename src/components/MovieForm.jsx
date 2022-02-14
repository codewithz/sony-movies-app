import React, { useState, useEffect } from 'react'
import Input from './common/Input';
import Joi from 'joi-browser';
import { getGenres } from '../services/fakeGenreService';
import { getMovie } from '../services/fakeMovieService';

export default function MovieForm(props) {

    const [data, setData] = useState(
        {
            title: '',
            genreId: '',
            numberInStock: '',
            dailyRentalRate: ''
        }
    );
    const [genres, setGenres] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const genres = getGenres();
        setGenres(genres);

        const movieId = props.match.params.id;
        if (movieId === 'new') return;

        const movie = getMovie(movieId);

        if (!movie) return props.history.replace("/not-found");

        setData(mapToViewModel(movie));

    })

    const mapToViewModel = (movie) => {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    }

    const schema = {
        _id: Joi.string(),
        title: Joi.string().required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().required().min(0).max(100).label('Number in Stock'),
        dailyRentalRate: Joi.number().required().min(0).max(10).label('Daily Rental Rate')
    };

    const validate = () => {

        const options = { abortEarly: true }
        const result = Joi.validate(data, schema, options);
        console.log("Result from Joi \n :", result);

        if (!result.error) return null;

        const errors = {};

        for (let item of result.error.details) {
            errors[item.path[0]] = item.message;
        }

        return errors;

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = validate();
        setErrors(errors || {});
        console.log(errors);

        if (errors) return;

        doSubmit();
    }

    const doSubmit = () => {

        props.history.push("/movies");
    }

    const validateProperty = (input) => {

        const { name, value } = input;
        const obj = { [name]: value };
        const subSchema = {
            [name]: schema[name]
        }

        const result = Joi.validate(obj, subSchema);

        if (!result.error) {
            return null;
        }
        else {
            return result.error.details[0].message;
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        const errorsClone = { ...errors };
        const errorMessage = validateProperty(event.currentTarget);
        if (errorMessage) {
            errorsClone[name] = errorMessage;

        }
        else {
            delete errorsClone[name];
        }
        setErrors(errorsClone)


        const dataClone = { ...data };
        dataClone[name] = value;

        setData(dataClone);
    }


    return (
        <div>
            <h1>Movie Form</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    label="Title"
                    error={errors.title}
                />
                <Input
                    name="genreId"
                    value={data.genreId}
                    onChange={handleChange}
                    label="Genre"
                    error={errors.genreId}
                />
                <Input
                    name="numberInStock"
                    value={data.numberInStock}
                    onChange={handleChange}
                    label="Number In Stock"
                    error={errors.numberInStock}
                />
                <Input
                    name="dailyRentalRate"
                    value={data.dailyRentalRate}
                    onChange={handleChange}
                    label="Daily Rental Rate"
                    error={errors.dailyRentalRate}
                />

                <button
                    disabled={validate()}
                    className="btn btn-warning btn-sm m-2">Save</button>
            </form>

        </div >
    )
}








