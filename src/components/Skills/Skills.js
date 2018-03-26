import React from 'react'
import SkillImage from "../../assets/skillImage.png"
import "./Skills.css"

const skills = (props) => (
    <div className="Skills">
        <div className="SkillBlock">
            <div className="SkillTitleContainer">
                <h1 className="Title2">Title 1</h1>
            </div>
            <div className="SkillContent">
                <div className="ImgContainer">
                    <img src={SkillImage} alt="skill 1"/>
                </div>
                <p className="SkillDescription">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Maecenas velit purus, ornare viverra purus ac, convallis
                    lacinia odio. Fusce interdum ac orci et placerat. Praesent scelerisque quis
                    lorem sit amet facilisis. Mauris at dapibus dui. Sed sollicitudin velit arcu,
                    non bibendum sem feugiat sit amet. Donec sodales nulla id tellus ornare, eu
                    faucibus risus egestas
                </p>
                <a className="btn" href=""><i className="fas fa-info"></i> Read more Link</a>
            </div>

            <div className="SkillFooter">
                <div className="SkillActions">
                    <button className="btn"><i className="fas fa-edit"></i> Edit</button>
                    <button className="btn"><i className="fas fa-save"></i> Save</button>
                    <button className="btn"><i className="fas fa-trash-alt"></i> Delete</button>
                </div>
            </div>
        </div>

        <div className="SkillBlock">
            <div className="SkillTitleContainer">
                <h1 className="SkillTitle">Title 2</h1>
            </div>
            <div className="SkillContent">
                <div className="ImgContainer">
                    <img src={SkillImage} alt="skill 2"/>
                </div>
                <p className="SkillDescription">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Maecenas velit purus, ornare viverra purus ac, convallis
                    lacinia odio. Fusce interdum ac orci et placerat. Praesent scelerisque quis
                    lorem sit amet facilisis. Mauris at dapibus dui. Sed sollicitudin velit arcu,
                    non bibendum sem feugiat sit amet. Donec sodales nulla id tellus ornare, eu
                    faucibus risus egestas
                </p>
                <a  className="btn" href=""><i className="fas fa-info"></i> Read more Link</a>
            </div>

            <div className="SkillFooter">
                <div className="SkillActions">
                    <button className="btn"><i className="fas fa-edit"></i> Edit</button>
                    <button className="btn"><i className="fas fa-save"></i> Save</button>
                    <button className="btn"><i className="fas fa-trash-alt"></i> Delete</button>
                </div>
            </div>
        </div>

        <div className="SkillBlock">
            <div className="SkillTitleContainer">
                <h1 className="SkillTitle">Title 3</h1>
            </div>
            <div className="SkillContent">
                <div className="ImgContainer">
                    <img src={SkillImage} alt="skill 3"/>
                </div>
                <p className="SkillDescription">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Maecenas velit purus, ornare viverra purus ac, convallis
                    lacinia odio. Fusce interdum ac orci et placerat. Praesent scelerisque quis
                    lorem sit amet facilisis. Mauris at dapibus dui. Sed sollicitudin velit arcu,
                    non bibendum sem feugiat sit amet. Donec sodales nulla id tellus ornare, eu
                    faucibus risus egestas
                </p>
                <a  className="btn" href=""><i className="fas fa-info"></i> Read more Link</a>
            </div>

            <div className="SkillFooter">
                <div className="SkillActions">
                    <button className="btn"><i className="fas fa-edit"></i> Edit</button>
                    <button className="btn"><i className="fas fa-save"></i> Save</button>
                    <button className="btn"><i className="fas fa-trash-alt"></i> Delete</button>
                </div>
            </div>
        </div>

        <div className="SkillBlock">
            <div className="SkillTitleContainer">
                <h1 className="SkillTitle">Title 4</h1>
            </div>
            <div className="SkillContent">
                <div className="ImgContainer">
                    <img src={SkillImage} alt="skill 4"/>
                </div>
                <p className="SkillDescription">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Maecenas velit purus, ornare viverra purus ac, convallis
                    lacinia odio. Fusce interdum ac orci et placerat. Praesent scelerisque quis
                    lorem sit amet facilisis. Mauris at dapibus dui. Sed sollicitudin velit arcu,
                    non bibendum sem feugiat sit amet. Donec sodales nulla id tellus ornare, eu
                    faucibus risus egestas
                </p>
                <a className="btn" href=""><i className="fas fa-info"></i> Read more Link</a>
            </div>

            <div className="SkillFooter">
                <div className="SkillActions">
                    <button className="btn"><i className="fas fa-edit"></i> Edit</button>
                    <button className="btn"><i className="fas fa-save"></i> Save</button>
                    <button className="btn"><i className="fas fa-trash-alt"></i> Delete</button>
                </div>
            </div>
        </div>
    </div>
)

export default skills