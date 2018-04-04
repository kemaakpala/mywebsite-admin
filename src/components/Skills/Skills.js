import React, {Fragment} from 'react'
import SkillImage from "../../assets/skillImage.png"
import classes from "./Skills.css"
import Button from "../UI/Button/Button"
import TextArea from "../UI/Inputs/TextArea/TextArea"
const skills = (props) => {

    if(props.editStart){
        console.log('[skill.js]: ', props.editStart)
        // inject form elements
    }

    return (
    <div className={classes.Skills}>
        <div className={classes.SkillActionHeader}>
            <Button 
                className={classes.BtnActions}
                clicked={props.addSkill}
            ><i className="fas fa-plus fa-lg"></i> Add New Skill</Button>
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
                {
                    props.editStart 
                        ?<TextArea
                            Id="description_0"
                            Label="Description"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Maecenas velit purus, ornare viverra purus ac, convallis
                        lacinia odio. Fusce interdum ac orci et placerat. Praesent scelerisque quis
                        lorem sit amet facilisis. Mauris at dapibus dui. Sed sollicitudin velit arcu,
                        non bibendum sem feugiat sit amet. Donec sodales nulla id tellus ornare, eu
                        faucibus risus egestas</TextArea>
                        : <p className={classes.SkillDescription}>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Maecenas velit purus, ornare viverra purus ac, convallis
                        lacinia odio. Fusce interdum ac orci et placerat. Praesent scelerisque quis
                        lorem sit amet facilisis. Mauris at dapibus dui. Sed sollicitudin velit arcu,
                        non bibendum sem feugiat sit amet. Donec sodales nulla id tellus ornare, eu
                        faucibus risus egestas
                    </p>
                }
                    <Button classes={classes.BtnActions}href=""><i className="fas fa-info"></i> Read more Link</Button>
                </div>
            </div>

            <div className={classes.SkillFooter}>
                <div className={classes.SkillActions}>
                    {   !props.editStart 
                        ? <Button classes={classes.BtnActions} clicked={props.editSkills}><i className="fas fa-edit"></i> Edit</Button>
                        : <Fragment>
                            <Button classes={classes.BtnActions} clicked={props.updateSkills}><i className="fas fa-save"></i> Save</Button>
                            <Button classes={classes.BtnActions} clicked={props.deleteSkills}><i className="fas fa-trash-alt"></i> Delete</Button>
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

export default skills