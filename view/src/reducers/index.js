import {combineReducers} from "redux"
//import contact from "./reducer_contact"
//import jumbotron from "reducer_jumbotron"
import skills from "./reducer_skills"
import formState from "./reducer_formState"

const rootReducer = combineReducers(
    {
        //jumbotron,
        skills,
        formState
        //contact,
    }
)

export default rootReducer