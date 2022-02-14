import React from 'react'

export default function LoginForm() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text" className="form-control" />
                </div>
                <button className="btn btn-warning btn-sm m-2">Login</button>
            </form>

        </div>
    )
}
