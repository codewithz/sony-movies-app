import React, { useState } from 'react'
import Input from './common/Input';

export default function LoginForm() {

    const accountObject = { username: '', password: '' };



    const [account, setAccount] = useState(accountObject);
    const [errors, setErrors] = useState({});

    const validate = () => {

        const errors = {}

        if (account.username.trim() === '') {
            errors.username = 'Username is required';
        }
        if (account.password.trim() === '') {
            errors.password = 'Password is required';
        }

        return Object.keys(errors).length === 0 ? null : errors;
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

    const handleChange = (event) => {
        // console.log("Handle Change", event)
        const { name, value } = event.currentTarget;
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
                />
                <Input
                    name="password"
                    value={account.password}
                    onChange={handleChange}
                    label="Password"
                />
                <button className="btn btn-warning btn-sm m-2">Login</button>
            </form>

        </div >
    )
}
