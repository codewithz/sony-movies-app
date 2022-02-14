import React, { useState } from 'react'

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
        const accountClone = { ...account };
        accountClone.username = event.currentTarget.value;

        setAccount(accountClone);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input id="username"
                        type="text"
                        className="form-control"
                        value={account.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password"
                        type="text"
                        value={account.password}
                        className="form-control"

                    />
                </div>
                <button className="btn btn-warning btn-sm m-2">Login</button>
            </form>

        </div>
    )
}
