import React, {Fragment} from 'react'
// import SkillImage from "../../assets/skillImage.png"
import classes from "./Skills.css"

import {SkillActionHeader} from "./SkillActions/";
import SkillBlock from './SkillBlock/SkillBlock';



const skills = (props) => {

        if(props.editStart){
            console.log('[skill.js]: ', props.editStart)
            // inject form elements
        }
        
        let skillBlock = props.content.map((skill) => {
            const {_id, title, link, isActive, image, description, date} = skill
            return (
                <SkillBlock
                    key= {_id['$oid']}
                    id= {_id['$oid']}
                    title= {title}
                    link= {link}
                    isActive= {isActive}
                    description= {description}
                    SkillImage= {image}
                    date= {date}
                    edit = {props.edit}
                    editStart= {props.editStart} 
                    publish= {props.publish}
                    save= {props.save}
                    delete= {props.delete}
                    close= {props.close}
                />
            )
        }) 

        let skills = (
            <div className={classes.Skills}>
                <SkillActionHeader 
                    add={props.add}
                />
                {skillBlock}
            </div>
        )

        //Skill has been deleted
        if(!props.show){
            skills = null
        }
        

        return <Fragment>{skills}</Fragment>
        
}

export default skills