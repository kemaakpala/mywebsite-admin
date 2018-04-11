import React,{Fragment} from 'react'
import classes from './TextArea.css'

const textAreaField = (props) => {
    return (
    <Fragment>
        <label htmlFor={props.Id}>
            {props.Label}
        </label>
        <textarea 
            id={props.Id} 
            className={classes.TextArea} 
            value={props.value} 
            onChange={props.changed}
        ></textarea>
    </Fragment>
    )
}

export default textAreaField