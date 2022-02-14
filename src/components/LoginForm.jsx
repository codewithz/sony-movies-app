import React, { useState } from 'react'
import Input from './common/Input';
import Joi from 'joi-browser';

export default function LoginForm() {

    const accountObject = { username: '', password: '' };

    const [account, setAccount] = useState(accountObject);
    const [errors, setErrors] = useState({});

    const schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };

    const validate = () => {

        const result = Joi.validate(account, schema, { abortEarly: false });
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
        setErrors(errors);
        console.log(errors);

        if (errors) return;

        //Call the server
        console.log('Submitted');
    }

    const validateProperty = (input) => {

        if (input.name === 'username') {
            if (input.value.trim() === '') {
                //..................
                return 'Username is required'
            }
        }
        if (input.name === 'password') {
            if (input.value.trim() === '') {
                return 'Password is required'
            }
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


        const accountClone = { ...account };
        accountClone[name] = value;

        setAccount(accountClone);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    name="username"
                    value={account.username}
                    onChange={handleChange}
                    label="Username"
                    error={errors.username}
                />
                <Input
                    name="password"
                    value={account.password}
                    onChange={handleChange}
                    label="Password"
                    error={errors.password}
                />
                <button className="btn btn-warning btn-sm m-2">Login</button>
            </form>

        </div >
    )
}
