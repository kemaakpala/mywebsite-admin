import React, {Fragment} from 'react'
import Button from "../../../UI/Button/Button";
import classes from "./SkillActionFooter.css"

const SkillActionFooter = (props) => (
    <div>
        {   !props.editStart && !props.addStart
            ? <Fragment>
                <Button id={`edit_${props.id}`} classes={classes.BtnActions} clicked={props.edit}><i className="fas fa-edit"></i> Edit</Button>
                <Button id={`publish_${props.id}`} classes={classes.BtnActions} clicked={props.publish}><i className="fas fa-edit"></i> Publish</Button>
            </Fragment>
            : <Fragment>
                <Button id={`save_${props.id}`} classes={classes.BtnActions} clicked={props.save}><i className="fas fa-save"></i> Save</Button>
                {   props.ediStart 
                        ? <Button id={`delete_${props.id}`} classes={classes.BtnActions} clicked={props.delete}><i className="fas fa-trash-alt"></i> Delete</Button>
                        : null
                }
                <Button id={`cancel_${props.id}`} classes={classes.BtnActions} clicked={props.close}><i className="fas fa-times"></i> Cancel</Button>
            </Fragment>
        }
    </div>
)

export default SkillActionFooter