import React, {Fragment} from 'react'
import TextArea from "../../UI/Inputs/TextArea/TextArea"
import TextField from "../../UI/Inputs/TextField/TextField"
import {SkillActionFooter} from "../SkillActions";
import classes from "./SkillBlock.css"
import { initSaveSkill, buildFormData, isPristine, isDirty } from "../../../actions";
import {connect} from 'react-redux'
const SkillBlockForm = (props) => {
    const {
        title,
        description,
        link,
        addStart,
        editStart,
        edit,
        publish,
        save,
        close
    } = props

    const textFieldChangeHandler = (event) => {
        
       ///props.onBuildFormData({ [event.target.id]:  event.target.value})
    }

    const textAreaChangeHandler = (event) => {
        ///props.onBuildFormData({ [event.target.id]:  event.target.value})
    }

    const onSubmitHandler = (event, formData) => {
        event.preventDefault()
        props.onInitSaveSkill(formData)

    }
    const onFieldBlur = (event) => {
        props.onBuildFormData({ [event.target.id]:  event.target.value})
        console.log(props.skills.formData.title)
    }
    return (
        <form className={classes.SkillBlock} onSubmit={onSubmitHandler}>
            {/* remember to wrap elements in form if you cannot get away with submitting the value of elements with axios.post */}
            <div className={classes.SkillTitleContainer}>
                <TextField
                    Id={`Title`}
                    Label="Title"
                    value={title}
                    changed={textFieldChangeHandler}
                    blurred={onFieldBlur}/>
            </div>
            <div className={classes.SkillContent}>
                <div className={classes.ImgContainer}>
                    <input type="file" name="" id={`Image`}/>
                </div>
                <div className={classes.SkillDescriptionContainer}>
                    <TextArea
                        Id={`description`}
                        Label="Description"
                        value={description}
                        changed={textAreaChangeHandler}
                        blurred={onFieldBlur}></TextArea>
                    <TextField
                        Id={`btnAction`}
                        Label="Readmore Link"
                        value={link}
                        changed={textFieldChangeHandler}
                        blurred={onFieldBlur}/>
                </div>
            </div>

            <div className={classes.SkillBlockFooter}>
                <SkillActionFooter
                    id={`actions`}
                    addStart={addStart}
                    editStart={editStart}
                    edit={edit}
                    publish={publish}
                    save={save}
                    delete={props.delete}
                    close={close}/>
            </div>
        </form>

    )
}

const mapStateToProps = ({skills, formState}) => {
    return {
        skills,
        formState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitSaveSkill: () => dispatch(initSaveSkill()),
        onBuildFormData: (data) => dispatch(buildFormData(data)),
        onFieldFocus: () => dispatch(isPristine()),
        onFieldBlur: (data) => dispatch(isDirty(data))
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(SkillBlockForm)