import React, { useState } from 'react'

export default function Like(props) {


    const { liked } = props

    let classes = "fa fa-heart";

    if (!liked) {
        classes += '-o';
    }

    return (

        <i className={classes}
            onClick={props.onClick}
            style={{ cursor: 'pointer' }}
        >

        </i>
    )
}
