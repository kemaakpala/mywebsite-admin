import React, {Component, Fragment} from 'react'
import SkillImage from "../../assets/skillImage.png"
import classes from "./Skills.css"
import Button from "../UI/Button/Button"
import TextArea from "../UI/Inputs/TextArea/TextArea"
import TextField from "../UI/Inputs/TextField/TextField"

class Skills extends Component {
    render(){

        if(this.props.editStart){
            console.log('[skill.js]: ', this.props.editStart)
            // inject form elements
        }

        return (

            <div className={classes.Skills}>
                <div className={classes.SkillActionHeader}>
                    <Button 
                        className={classes.BtnActions}
                        clicked={this.props.addSkill}
                    ><i className="fas fa-plus fa-lg"></i> Add New Skill</Button>
                </div>
                <div className={classes.SkillBlock}>
                    <div className={classes.SkillTitleContainer}>
                        {
                        this.props.editStart
                            ? <TextField Id="Title_0" Label="Title" value="Title 1"/>
                            :<h1 className={classes.Title2}>Title 1</h1>
                        }
                    </div>
                    <div className={classes.SkillContent}>
                        <div className={classes.ImgContainer}>
                            {
                            this.props.editStart 
                                ? 'file uploader'
                                :<img src={SkillImage} alt="skill 1"/>}
                        </div>
                        <div className={classes.SkillDescriptionContainer}>    
                        {
                            this.props.editStart 
                                ?<Fragment>
                                    <TextArea
                                        Id="description_0"
                                        Label="Description"
                                    >Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas velit purus, ornare viverra purus ac, convallis
                                    lacinia odio. Fusce interdum ac orci et placerat. Praesent scelerisque quis
                                    lorem sit amet facilisis. Mauris at dapibus dui. Sed sollicitudin velit arcu,
                                    non bibendum sem feugiat sit amet. Donec sodales nulla id tellus ornare, eu
                                    faucibus risus egestas
                                    </TextArea>
                                    <TextField 
                                        Id="btnAction_0"
                                        Label="Readmore Link"
                                        value="test"
                                        changed={this.textFieldChangeHandler}
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
                                <Button classes={classes.BtnActions}href=""><i className="fas fa-info"></i> Read more Link</Button>
                            </Fragment>
                        }
                        </div>
                    </div>
        
                    <div className={classes.SkillFooter}>
                        <div className={classes.SkillActions}>
                            {   !this.props.editStart 
                                ? <Button classes={classes.BtnActions} clicked={this.props.editSkills}><i className="fas fa-edit"></i> Edit</Button>
                                : <Fragment>
                                    <Button classes={classes.BtnActions} clicked={this.props.updateSkills}><i className="fas fa-save"></i> Save</Button>
                                    <Button classes={classes.BtnActions} clicked={this.props.deleteSkills}><i className="fas fa-trash-alt"></i> Delete</Button>
                                </Fragment>
                            }
                        </div>
                    </div>
                </div>
        
               
               <div className={classes.SkillBlock}>
                    <div className={classes.SkillTitleContainer}>
                        <h1 className={classes.Title2}>Title 1</h1>
                    </div>
                    <div className={classes.SkillContent}>
                        <div className={classes.ImgContainer}>
                            <img src={SkillImage} alt="skill 1"/>
                        </div>
                        <div className={classes.SkillDescriptionContainer}>    
                            <p className={classes.SkillDescription}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas velit purus, ornare viverra purus ac, convallis
                                lacinia odio. Fusce interdum ac orci et placerat. Praesent scelerisque quis
                                lorem sit amet facilisis. Mauris at dapibus dui. Sed sollicitudin velit arcu,
                                non bibendum sem feugiat sit amet. Donec sodales nulla id tellus ornare, eu
                                faucibus risus egestas
                            </p>
                            <Button classes={classes.BtnActions}href=""><i className="fas fa-info"></i> Read more Link</Button>
                        </div>
                    </div>
        
                    <div className={classes.SkillFooter}>
                        <div className={classes.SkillActions}>
                            <Button classes={classes.BtnActions}><i className="fas fa-edit"></i> Edit</Button>
                            <Button classes={classes.BtnActions}><i className="fas fa-save"></i> Save</Button>
                            <Button classes={classes.BtnActions}><i className="fas fa-trash-alt"></i> Delete</Button>
                        </div>
                    </div>
                </div>
        
                
                <div className={classes.SkillBlock}>
                    <div className={classes.SkillTitleContainer}>
                        <h1 className={classes.Title2}>Title 1</h1>
                    </div>
                    <div className={classes.SkillContent}>
                        <div className={classes.ImgContainer}>
                            <img src={SkillImage} alt="skill 1"/>
                        </div>
                        <div className={classes.SkillDescriptionContainer}>    
                            <p className={classes.SkillDescription}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas velit purus, ornare viverra purus ac, convallis
                                lacinia odio. Fusce interdum ac orci et placerat. Praesent scelerisque quis
                                lorem sit amet facilisis. Mauris at dapibus dui. Sed sollicitudin velit arcu,
                                non bibendum sem feugiat sit amet. Donec sodales nulla id tellus ornare, eu
                                faucibus risus egestas
                            </p>
                            <Button classes={classes.BtnActions}href=""><i className="fas fa-info"></i> Read more Link</Button>
                        </div>
                    </div>
        
                    <div className={classes.SkillFooter}>
                        <div className={classes.SkillActions}>
                            <Button classes={classes.BtnActions}><i className="fas fa-edit"></i> Edit</Button>
                            <Button classes={classes.BtnActions}><i className="fas fa-save"></i> Save</Button>
                            <Button classes={classes.BtnActions}><i className="fas fa-trash-alt"></i> Delete</Button>
                        </div>
                    </div>
                </div>
        
                
                <div className={classes.SkillBlock}>
                    <div className={classes.SkillTitleContainer}>
                        <h1 className={classes.Title2}>Title 1</h1>
                    </div>
                    <div className={classes.SkillContent}>
                        <div className={classes.ImgContainer}>
                            <img src={SkillImage} alt="skill 1"/>
                        </div>
                        <div className={classes.SkillDescriptionContainer}>    
                            <p className={classes.SkillDescription}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas velit purus, ornare viverra purus ac, convallis
                                lacinia odio. Fusce interdum ac orci et placerat. Praesent scelerisque quis
                                lorem sit amet facilisis. Mauris at dapibus dui. Sed sollicitudin velit arcu,
                                non bibendum sem feugiat sit amet. Donec sodales nulla id tellus ornare, eu
                                faucibus risus egestas
                            </p>
                            <Button classes={classes.BtnActions}href=""><i className="fas fa-info"></i> Read more Link</Button>
                        </div>
                    </div>
        
                    <div className={classes.SkillFooter}>
                        <div className={classes.SkillActions}>
                            <Button ><i className="fas fa-edit"></i> Edit</Button>
                            <Button ><i className="fas fa-save"></i> Save</Button>
                            <Button ><i className="fas fa-trash-alt"></i> Delete</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills