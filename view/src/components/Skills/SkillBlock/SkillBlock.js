import React, {Fragment} from 'react'
import Button from "../../UI/Button/Button"
import TextArea from "../../UI/Inputs/TextArea/TextArea"
import TextField from "../../UI/Inputs/TextField/TextField"
import { SkillActionFooter } from "../SkillActions";
import classes from "./SkillBlock.css"

const SkillBlock = (props) => {
    console.log('[props]: ', props)
    const {
        id, title, SkillImage, description, 
        editStart, edit, publish, save, close,
        addStart
    } = props

    const textFieldChangeHandler = (event) => {
        console.log(event)
        return event
    }

    const textAreaChangeHandler = (event) => {
        console.log(event)
        return event
    }
    return (
        <div className={classes.SkillBlock}>
        {/* remember to wrap elements in form if you cannot get away with submitting the value of elements with axios.post */}
            <div className={classes.SkillTitleContainer}>
                {
                editStart
                    ? <TextField Id={`Title_${id}`} Label="Title" value={title} changed={textFieldChangeHandler}/>
                    :<h1 className={classes.Title2}>{title}</h1>
                }
            </div>
            <div className={classes.SkillContent}>
                <div className={classes.ImgContainer}>
                    {
                    props.editStart 
                        ? 'file uploader'
                        :<img src={SkillImage} alt="skill 1"/>}
                </div>
                <div className={classes.SkillDescriptionContainer}>    
                {
                    editStart 
                        ?<Fragment>
                            <TextArea
                                Id={`description_${id}`}
                                Label="Description"
                                value={description}
                                changed={textAreaChangeHandler}
                            >
                            </TextArea>
                            <TextField 
                                Id={`btnAction_${id}`}
                                Label="Readmore Link"
                                value="test"
                                changed={textFieldChangeHandler}
                            />
                            </Fragment>
                        : <Fragment>
                        <p className={classes.SkillDescription} >{description}</p>
                        <Button classes={classes.BtnActions} ><i className="fas fa-info"></i> Read more Link</Button>
                    </Fragment>
                }
                </div>
            </div>

            <div className={classes.SkillBlockFooter}>
                <SkillActionFooter 
                    id={`actions_${id}`}
                    editStart= {editStart}
                    edit= {edit}
                    publish= {publish}
                    save={save}
                    delete= {props.delete}
                    close= {close}
                />
            </div>
        </div>

)}

export default SkillBlock