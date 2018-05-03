import React from 'react'
import Button from "../../../UI/Button/Button";
import classes from "./SkillActionHeader.css"

const SkillActionHeader = (props) => (
    <div className={classes.SkillActionHeader}>
    <Button 
        className={classes.BtnActions}
        clicked={props.add}
    ><i className="fas fa-plus fa-lg"></i> Add New Skill</Button>
    </div>
)

export default SkillActionHeader