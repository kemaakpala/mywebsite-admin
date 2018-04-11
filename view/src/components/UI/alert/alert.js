import React from 'react'
import Button from '../Button/Button'
import classes from './alert.css'

const modal = (props) => (
    <div className={classes.Alert}>
        <h1> This is an alert header</h1>
        <p> sample Tex</p>
        <Button>Save</Button>
        <Button>Cancel</Button>
    </div>
)

export default modal