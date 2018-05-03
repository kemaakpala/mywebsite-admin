
import React from 'react'
import classes from 'ContactActions.css'
import Button from "../../UI/Button/Button";

const contactActions = (props) => (

    <div className={classes.ContactActions}>
        <Button ><i className="fas fa-check"></i> Read</Button>
        <Button ><i className="fas fa-reply"></i> Reply</Button>
        <Button ><i className="fas fa-trash-alt"></i> Delete</Button>
    </div>
)

export default contactActions