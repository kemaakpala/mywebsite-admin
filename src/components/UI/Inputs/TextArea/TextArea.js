import React,{Fragment} from 'react'
import classes from './TextArea.css'

const textAreaField = (props) => {
    return (
    <Fragment>
        <label for={props.Id}>
            {props.Label}
        </label>
        <textarea id={props.Id} className={classes.TextArea}>{props.children}</textarea>
    </Fragment>
    )
}

export default textAreaField