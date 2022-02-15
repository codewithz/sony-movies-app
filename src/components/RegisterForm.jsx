import React, { useState } from 'react'
import Input from './common/Input';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import * as userService from '../services/userService';


export default function RegisterForm() {

    const [data, setData] = useState({ username: '', password: '', name: '' });
    const [errors, setErrors] = useState({});

    const schema = {
        username: Joi.string().required().email().label('Username'),
        password: Joi.string().required().min(5).label('Password'),
        name: Joi.string().required().label('Name')
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

    const doSubmit = async () => {
        //Call the server
        try {
            const response = await userService.register(data);
            localStorage.setItem("token", response.headers["x-auth-token"])
            toast.success('User registered successfully');
            clearUserState();

        }
        catch (error) {
            if (error.response && error.response.status === 400) {
                const errorsClone = { ...errors };
                errorsClone.username = error.response.data;
                setErrors(errorsClone);

            }

        }
    }

    const clearUserState = () => {
        setData({ username: '', password: '', name: '' });
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
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    label="Username"
                    error={errors.username}
                />
                <Input
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    label="Password"
                    error={errors.password}
                />
                <Input
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    label="Name"
                    error={errors.name}
                />
                <button
                    disabled={validate()}
                    className="btn btn-primary btn-sm m-2">Register</button>
            </form>

        </div >
    )
}
