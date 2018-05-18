import {
  ADD_SKILL,
  EDIT_SKILL,
  SAVE_SKILL,
  DELETE_SKILL,
  UNPUBLISH_SKILL,
  PUBLISH_SKILL,
  GET_SKILLS,
  START_GET_SKILLS,
  END_GET_SKILLS,
  GET_SKILLS_ERROR,
  START_ADD_SKILL,
  CANCEL_ADD_SKILL,
  BUILD_FORM_DATA
} from "../actions/actionTypes";
import _ from 'lodash'

const initialState = {
  fetching: false,
  fetched: false,
  data: [],
  error: null,
  addStart: false,
  editStart: false,
  close: true,
  formData: []
}

export default(state = initialState, action) => {
  switch (action.type) {
    case START_GET_SKILLS:
      return {
        ...state,
        fetching: true
      }

    case GET_SKILLS:
      return {
        ...state,
        data: action.payload,
        fetching: false,
        fetched: true
      }

    case GET_SKILLS_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case START_ADD_SKILL: 
      return {
        ...state,
        addStart: true,
        editStart: false,
        close: false
      }
    case CANCEL_ADD_SKILL:
      return {
        ...state,
        addStart: false,
        editStart: false,
        close: true
      }
    case ADD_SKILL:
      return {
        ...state,
        data: action.payload
      }
    case BUILD_FORM_DATA:
      var newData = state.formData
      return {
        ...state,
        formData: [
          ...newData,
          action.payload
        ]
      }
    case EDIT_SKILL:
    case SAVE_SKILL:
    case DELETE_SKILL:
    case PUBLISH_SKILL:
    case UNPUBLISH_SKILL:
    default:
      return state
  }
}