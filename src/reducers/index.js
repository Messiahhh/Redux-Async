import { combineReducers } from 'redux'
import {
    CHANGE_CHANNEL,
    REQUEST_POSTS,
    RECEIVED_POSTS,
} from '../actions'
const channel = (state = "nintendo", action) => {
    switch(action.type) {
        case CHANGE_CHANNEL:
            return action.channel
        default:
            return state
    }
}

const posts = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch(action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVED_POSTS:
            return {
                ...state,
                isFetching: false,
                items: action.posts
            }
        default:
            return state
    }
}




const rootReducer = combineReducers({
    channel,
    posts,
})

export default rootReducer
