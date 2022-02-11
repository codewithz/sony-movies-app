import React from 'react'

export default function ListGroup(props) {

    const { items, onItemSelect, selectedItem } = props;
    return (
        <ul class="list-group">
            {
                items.map(item => (
                    <li
                        key={item._id}
                        className={(selectedItem === item.name) ? "list-group-item active" : "list-group-item"}
                        onClick={() => onItemSelect(item)}
                    >
                        {item.name}
                    </li>
                ))
            }


        </ul>
    )
}
