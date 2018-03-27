import React from 'react'

const button = (props)=> (
    <button className={`${props.className} btn`}>
        {props.children}
    </button> 
)

export default button
