import { combineReducers } from 'redux'
import {
    CHANGE_CHANNEL,
    REQUEST_POSTS,
    RECEIVED_POSTS,
    INVALIDATE_CHANNEL,
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
    didInvalidate: false,
    items: [],
}, action) => {
    switch(action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false,
            }
        case RECEIVED_POSTS:
            return {
                ...state,
                isFetching: false,
                items: action.posts,
                date: action.date,
            }
        case INVALIDATE_CHANNEL:
            return {
                ...state,
                didInvalidate: true,
            }
        default:
            return state

    }
}

const postsByChannel = (state = {}, action) => {
    switch(action.type) {
        case REQUEST_POSTS:
        case RECEIVED_POSTS:
        case INVALIDATE_CHANNEL:
            return {
                ...state,
                [action.channel]: posts(state[action.channel], action)
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    channel,
    postsByChannel,
})

export default rootReducer
