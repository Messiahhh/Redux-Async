import axios from 'axios'
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL'
export const INVALIDATE_CHANNEL = 'INVALIDATE_CHANNEL'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVED_POSTS = 'RECEIVED_POSTS'

export const changeChannel = (channel) => ({
    type: CHANGE_CHANNEL,
    channel
})

export const invalidateChannel = (channel) => ({
    type: INVALIDATE_CHANNEL,
    channel
})

export const requestPosts = (channel) => ({
    type: REQUEST_POSTS,
    channel
})

export const receivedPosts = (channel, json) => ({
    type: RECEIVED_POSTS,
    channel,
    posts: json.data.children.map(child => child.data),
    date: Date.now(),
})


export const fetchPosts = (channel) => (dispatch, getState) => {
    dispatch(requestPosts(channel))
    return axios(`https://www.reddit.com/r/${channel}.json`)
        .then(json => dispatch(receivedPosts(channel, json.data)))
}

export const shouldFetch = (state, channel) => {
    let posts = state.postsByChannel[channel]
    if (!posts) {
        return true
    }
    else if (posts.isFetching) {
        return false
    }
    else {
        return posts.didInvalidate
    }
}

export const fetchPostsIfNeeded = (channel) => (dispatch, getState) => {
    if (shouldFetch(getState(), channel)) {
        dispatch(fetchPosts(channel))
    }
}
