import {
    EDIT_SKILL,
    DELETE_SKILL,
    PUBLISH_SKILL,
    ADD_SKILL,
    GET_SKILLS,
    START_GET_SKILLS,
    GET_SKILLS_ERROR,
    START_ADD_SKILL,
    ADD_SKILL_ERROR,
    CANCEL_ADD_SKILL,
    BUILD_FORM_DATA,
    IS_PRISTINE,
    IS_DIRTY
} from "./actionTypes";
import axios from 'axios'

const URL = 'https://api.mlab.com/api/1/databases/mywebsitedb/collections/myskills'
const API_KEY = 'l-Y1Jc4RDBK00c9Tqv-UhdkXvkK51-fa'
const PATH = `${URL}?apiKey=${API_KEY}`

export const startGetSkills = () => {
    return {type: START_GET_SKILLS}
}

export const getSKillsError = (err) => {
    return {type: GET_SKILLS_ERROR, payload: err}
}

export const getSkills = (data) => {
    // fetch skills here via axios
    return {type: GET_SKILLS, payload: data}
}

// ADD SKILL Actions
export const startAddSkill = () => {
    return {type: START_ADD_SKILL}
}

export const cancelAddSkill = () => {
    return {type: CANCEL_ADD_SKILL}
}
export const addSkill = (data) => {
    // add data to database here
    return {
        type: ADD_SKILL, 
        payload: data
    }
}

export const isPristine = () => {
    return {
        type: IS_PRISTINE
    }
}

export const isDirty = () => {
    return {
        type: IS_DIRTY
    }
}

export const buildFormData = (data) => {
    
    return {
        type: BUILD_FORM_DATA,
        payload: data
    }
}

export const addSkillError = (err) => {
    return {
        type:ADD_SKILL_ERROR,
        payload: err
    }
}

export const editSkill = (id) => {
    return {type: EDIT_SKILL, payload: id}
}

export const deleteSkill = (id) => {
    return {type: DELETE_SKILL, payload: id}
}

export const publishSkill = (id) => {
    return {type: PUBLISH_SKILL, payload: true}
}

export const initSkills = () => {
    return dispatch => {
        dispatch(startGetSkills())
        axios
            .get(PATH)
            .then((response) => {
                dispatch(getSkills(response.data))
            })
            .catch((err) => {
                dispatch(getSKillsError(err))
            })
    }
}


export const initSaveSkill = (dataObj) => {
    return dispatch => {
        axios
        .post(PATH, dataObj)
        .then(response => {
            console.log(response)
            dispatch(addSkill(dataObj))
        })
        .catch(err => {
            dispatch(addSkillError(err))
        })
    }
}