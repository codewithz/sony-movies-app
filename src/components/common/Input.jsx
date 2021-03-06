import React from 'react'

export default function Input(props) {

    const { name, label, onChange, value, error } = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input id={name}
                name={name}
                type="text"
                className="form-control"
                value={value}
                onChange={onChange}

            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}
