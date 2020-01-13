export const CHANGE_CHANNEL = 'CHANGE_CHANNEL'

export const changeChannel = (channel) => {
    return {
        type: CHANGE_CHANNEL,
        channel
    }
}
