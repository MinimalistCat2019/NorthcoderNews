import React from 'react'

export default function ErrorDisplay(props) {
    return (
         <h3>{props.status}: {props.msg}</h3>
    )
}
