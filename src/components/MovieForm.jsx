import React from 'react'

export default function MovieForm(props) {

    const { id } = props.match.params;

    const handleSave = () => {
        props.history.push("/movies");
    }
    return (
        <div>
            <h1>Movie - {id}</h1>

            <button
                className="btn btn-warning btn-sm"
                onClick={handleSave}
            >
                Save
            </button>
        </div>
    )
}
