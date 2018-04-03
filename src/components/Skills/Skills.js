import React from 'react'
import SkillImage from "../../assets/skillImage.png"
import classes from "./Skills.css"
import Button from "../UI/Button/Button"

const skills = (props) => (
    <div className={classes.Skills}>
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

export default skills