import React from 'react'


const selectField = (props) => {
    return (
        <select>
            <option value=""> Select Items below</option>
            {
                props.options.map((option)=> {
                   return  <option value={props.option.value}> {props.option.text}</option>
                })
            }
        </select>
    )
}

export default selectField