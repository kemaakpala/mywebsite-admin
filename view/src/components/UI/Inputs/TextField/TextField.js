import React, {Fragment} from 'react'
import classes from './TextField.css'

const textField = (props) => {
    return (
        <Fragment >
            <label htmlFor={props.Id}>{props.Label}</label>
            <input 
                className={classes.TextField} 
                id={props.Id} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}
                onBlur={props.blurred} 
            />
        </Fragment>
    )
}

export default textField