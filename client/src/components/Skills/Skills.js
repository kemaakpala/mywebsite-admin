import React, {Fragment} from 'react'
import SkillImage from "../../assets/skillImage.png"
import classes from "./Skills.css"
import Button from "../UI/Button/Button"
import TextArea from "../UI/Inputs/TextArea/TextArea"
import TextField from "../UI/Inputs/TextField/TextField"

const skills =(props) => {
   

        if(props.editStart){
            console.log('[skill.js]: ', props.editStart)
            // inject form elements
        }
        const textFieldChangeHandler = (event) => {
            return event
        }

        const textAreaChangeHandler = (event) => {
            return event
        }
        let newSkillBlock = null
        if(props.new) {
            newSkillBlock = (
                <div className={classes.Skills}>
                    <div className={classes.SkillActionHeader}>
                        <Button 
                            className={classes.BtnActions}
                            clicked={props.add}
                        ><i className="fas fa-plus fa-lg"></i> Add New Skill</Button>
                    </div>
                    <div className={classes.SkillBlock}>
                    {/* remember to wrap elements in form if you cannot get away with submitting the value of elements with axios.post */}
                        <div className={classes.SkillTitleContainer}>
                            {
                            props.editStart
                                ? <TextField Id="Title_0" Label="Title" value="Title 1" changed={textFieldChangeHandler}/>
                                :<h1 className={classes.Title2}>Title 1</h1>
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
                                props.editStart 
                                    ?<Fragment>
                                        <TextArea
                                            Id="description_0"
                                            Label="Description"
                                            value={"enter description"}
                                            changed={textAreaChangeHandler}
                                        >
                                        </TextArea>
                                        <TextField 
                                            Id="btnAction_0"
                                            Label="Readmore Link"
                                            value="Enter Read More Link"
                                            changed={textFieldChangeHandler}
                                        />
                                        </Fragment>
                                    : <Fragment>
                                    <p className={classes.SkillDescription}>Enter Description
                                    </p>
                                    <Button classes={classes.BtnActions} href=""><i className="fas fa-info"></i> Read More Link</Button>
                                </Fragment>
                            }
                            </div>
                        </div>
            
                        <div className={classes.SkillFooter}>
                            <div className={classes.SkillActions}>
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
                        </div>
                    </div>
                </div>
            )
        }
        
        let skillBlock = (
            <div className={classes.Skills}>
                <div className={classes.SkillActionHeader}>
                    <Button 
                        className={classes.BtnActions}
                        clicked={props.add}
                    ><i className="fas fa-plus fa-lg"></i> Add New Skill</Button>
                </div>
                <div className={classes.SkillBlock}>
                {/* remember to wrap elements in form if you cannot get away with submitting the value of elements with axios.post */}
                    <div className={classes.SkillTitleContainer}>
                        {
                        props.editStart
                            ? <TextField Id="Title_0" Label="Title" value="Title 1" changed={textFieldChangeHandler}/>
                            :<h1 className={classes.Title2}>Title 1</h1>
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
                            props.editStart 
                                ?<Fragment>
                                    <TextArea
                                        Id="description_0"
                                        Label="Description"
                                        value={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit purus, ornare viverra purus ac, convallis
                                        lacinia odio. Fusce interdum ac orci et placerat. Praesent scelerisque quis
                                        lorem sit amet facilisis. Mauris at dapibus dui. Sed sollicitudin velit arcu,
                                        non bibendum sem feugiat sit amet. Donec sodales nulla id tellus ornare, eu
                                        faucibus risus egestas`}
                                        changed={textAreaChangeHandler}
                                    >
                                    </TextArea>
                                    <TextField 
                                        Id="btnAction_0"
                                        Label="Readmore Link"
                                        value="test"
                                        changed={textFieldChangeHandler}
                                    />
                                    </Fragment>
                                : <Fragment>
                                <p className={classes.SkillDescription}>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas velit purus, ornare viverra purus ac, convallis
                                    lacinia odio. Fusce interdum ac orci et placerat. Praesent scelerisque quis
                                    lorem sit amet facilisis. Mauris at dapibus dui. Sed sollicitudin velit arcu,
                                    non bibendum sem feugiat sit amet. Donec sodales nulla id tellus ornare, eu
                                    faucibus risus egestas
                                </p>
                                <Button classes={classes.BtnActions} href=""><i className="fas fa-info"></i> Read more Link</Button>
                            </Fragment>
                        }
                        </div>
                    </div>
        
                    <div className={classes.SkillFooter}>
                        <div className={classes.SkillActions}>
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
                    </div>
                </div>
            </div>
        )

        //Skill has been deleted
        if(!props.show){
            skillBlock = null
        }
        

        return <Fragment>{newSkillBlock}{skillBlock}</Fragment>
        
}

export default skills