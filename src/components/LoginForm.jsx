import React, { useState } from 'react'
import Input from './common/Input';

export default function LoginForm() {

    const accountObject = { username: '', password: '' };
    const [account, setAccount] = useState(accountObject);

    const handleSubmit = (event) => {
        event.preventDefault();

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
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password"
                        type="text"
                        value={account.password}
                        className="form-control"
                        name="password"
                        onChange={handleChange}

                    />
                </div>
                <button className="btn btn-warning btn-sm m-2">Login</button>
            </form>

        </div >
    )
}
