import React from 'react'
import TextArea from "./TextArea/TextArea";
import TextField from "./TextField/TextField"
import Select from "./SelectFields/SelectField"
import Radio from "./RadioButton/RadioButton";
import CheckBox from "./CheckBox/CheckBox";

const formElementBUildLogic = (props) => {
    let element = null;

    switch (props.type) {
        case 'TextField':
        case 'Email':
            element = <TextField label={props.label} {...props.elementConfig} changed={props.changehandler}/>
            break
        case 'TextArea':
            element = <TextArea label={props.label} {...props.elementConfig}/>
            break
        case 'Select':
            element = <Select label={props.label} {...props.elementConfig}/>
            break
        case 'Radio':
           element = <Radio label={props.label} {...props.elementConfig}/>
           break
        case 'CheckBox':
            element = <CheckBox label={props.label} {...props.elementConfig}/>
            break
        default: element = <TextField label={props.label} {...props.elementConfig} changed={props.changehandler}/>
    }

    return (
        {element}
    )
}

export default formElementBUildLogic