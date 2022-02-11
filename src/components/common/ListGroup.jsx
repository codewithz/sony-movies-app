import React from 'react'

export default function ListGroup(props) {

    const { items, onItemSelect } = props;
    return (
        <ul class="list-group">
            {
                items.map(genre => (
                    <li
                        key={genre._id}
                        class="list-group-item"
                        onClick={() => onItemSelect(genre)}
                    >{genre.name}</li>
                ))
            }


        </ul>
    )
}
