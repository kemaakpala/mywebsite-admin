import React, {Fragment} from 'react'
import Button from "../../../UI/Button/Button";
import classes from "./SkillActionFooter.css"

const SkillActionFooter = (props) => (
    <div>
        {   !props.editStart 
            ? <Fragment>
                <Button classes={classes.BtnActions} clicked={props.edit}><i className="fas fa-edit"></i> Edit</Button>
                <Button classes={classes.BtnActions} clicked={props.publish}><i className="fas fa-edit"></i> Publish</Button>
            </Fragment>
            : <Fragment>
                <Button classes={classes.BtnActions} clicked={props.save}><i className="fas fa-save"></i> Save</Button>
                <Button classes={classes.BtnActions} clicked={props.delete}><i className="fas fa-trash-alt"></i> Delete</Button>
                <Button classes={classes.BtnActions} clicked={props.close}><i className="fas fa-times"></i> Cancel</Button>
            </Fragment>
        }
    </div>
)

export default SkillActionFooter