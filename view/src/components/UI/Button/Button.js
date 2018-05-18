import React from 'react'
import classes from './Button.css'

const button = (props)=> {
    const customPropsClass = [classes.btn, props.classes]
    return (
        <button
            id={props.id} 
            onClick={props.clicked} 
            className={customPropsClass.join(' ')}
            {...props.elementConfig}
        >
            {props.children}
        </button> 
    )
}

export default button
