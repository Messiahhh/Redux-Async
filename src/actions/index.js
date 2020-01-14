import axios from 'axios'
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVED_POSTS = 'RECEIVED_POSTS'
export const changeChannel = (channel) => ({
    type: CHANGE_CHANNEL,
    channel
})

export const requestPosts = (channel) => ({
    type: REQUEST_POSTS,
    channel
})

export const receivedPosts = (json) => ({
    type: RECEIVED_POSTS,
    posts: json.data.children.map(child => child.data),
})


export const fetchPosts = (channel) => (dispatch, getState) => {
    dispatch(requestPosts(channel))
    return axios(`https://www.reddit.com/r/${channel}.json`)
        .then(json => dispatch(receivedPosts(json.data)))
}
