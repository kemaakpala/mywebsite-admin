import React from 'react'

import classes from './Logo.css'

const logo = (props) => (
    <img className={classes.Logo} src={props.SrcURL} alt={props.AltText} />
)

export default logo