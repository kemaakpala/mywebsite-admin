import React from 'react'

const textField = (props) => {
    return (
        <div>
            <label for={props.Id}>{props.label}</label>
            <input id={props.Id} {...props.elementConfig} value={props.value} />
        </div>
    )
}

export default textField