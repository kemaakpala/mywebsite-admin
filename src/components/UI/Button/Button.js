import React from 'react'
import classes from './Button.css'

const button = (props)=> (
    <button className={`${classes.btn} ${props.classes}`}>
        {props.children}
    </button> 
)

export default button
