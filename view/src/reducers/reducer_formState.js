import {IS_PRISTINE, IS_DIRTY} from '../actions/actionTypes'
const initialState = {
    pristine: true,
    dirty: false
}

const formState = (state = initialState, action) => {
    switch (action.type) {
        case IS_PRISTINE:
            return {
                ...state,
                pristine: false
            }
        case IS_DIRTY:
            return {
                ...state,
                dirty: true
            }

        default:
            return state
    }
}
export default formState