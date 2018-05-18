import React, {Component, Fragment} from 'react'
import { connect } from "react-redux";
import {initSkills, startAddSkill, cancelAddSkill, initSaveSkill} from "../../actions/"
//import _ from 'lodash'

// import SkillImage from "../../assets/skillImage.png"
import classes from "./Skills.css"

import {SkillActionHeader} from "./SkillActions/";
import SkillBlock from './SkillBlock/SkillBlock';
import SkillBlockForm from './SkillBlockForms/SkillBlockForms';

class Skills extends Component {

    componentDidMount(){
       this.props.onInitSkills()
    }

    addSkillHandler = () => {
        this.props.onstartAddSkill()
    }

    closeSkillHandler = () => {
        this.props.onCloseSkillBlockForm()
    }


    render (){
        let skillBlock = null
        let newSkillBlock = null

        if(this.props.skills.addStart) {
            newSkillBlock = (
                <SkillBlockForm 
                    addStart={this.props.skills.addStart}
                    editStart = {this.props.skills.editStart}
                    close={this.closeSkillHandler}
                />
            )
        }

        if(this.props.skills.fetching ){
            return <div>Loading...</div>
        }

        if(this.props.skills.fetched){
            skillBlock = this.props.skills.data.map((skill) => {
                const {
                    _id,
                    title,
                    link,
                    isActive,
                    image,
                    description,
                    date
                } = skill
                return (
                    <SkillBlock
                        key={_id['$oid']}
                        id={_id['$oid']}
                        title={title}
                        link={link}
                        isActive={isActive}
                        description={description}
                        SkillImage={image}
                        date={date}
                        edit={this.editSkillHandler}
                        editStart={this.props.editStart}
                        publish={this.props.publish}
                        delete={this.deleteSkillsHandler}
                        close={this.closeSkillHandler}/>
                )
            })
        }

    
    let skills = (
        <div className={classes.Skills}>
            <SkillActionHeader 
                add={this.addSkillHandler}
            />
            {newSkillBlock} 
            {skillBlock}
        </div>
    )


        return (
            <Fragment>{skills}</Fragment>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        skills: state.skills
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitSkills: () => dispatch(initSkills()),
        onstartAddSkill: () => dispatch(startAddSkill()),
        onCloseSkillBlockForm: () => dispatch(cancelAddSkill())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills)