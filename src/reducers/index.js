import { combineReducers } from 'redux'

const channel = (state = "nintendo", action) => {
    switch(action.type) {
        case "changeChannel":
            return action.channel
        default:
            return state
    }
}




const rootReducer = combineReducers({
    channel
})

export default rootReducer
