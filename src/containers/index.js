import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Picker from '../components/picker'
import Posts from '../components/posts'
import {
    changeChannel,
    invalidateChannel,
    fetchPostsIfNeeded,
} from '../actions'



const App = () => {
    const options = [
        "nintendo",
        "nintendoSwitch",
        "animalCrossing"
    ]

    const dispatch = useDispatch()
    const channel = useSelector(state => state.channel)
    const postsByChannel = useSelector(state => state.postsByChannel)
    const {
        isFetching,
        items: posts,
        date
    } = postsByChannel[channel] || {
        isFetching: true,
        items: []
    }

    let handlerChange = (value) => {
        dispatch(changeChannel(value))
    }
    let handlerRefresh = () => {
        dispatch(invalidateChannel(channel))
        dispatch(fetchPostsIfNeeded(channel))
    }

    useEffect(() => {
        dispatch(fetchPostsIfNeeded(channel))
    }, [channel])




    return (
        <div>
            <Picker value={channel} onChange={handlerChange} options={options} />

            {
                date &&
                <span>
                      Last updated at {new Date(date).toLocaleTimeString()}
                </span>
            }
            {
                !isFetching &&
                <button onClick={handlerRefresh}>refresh</button>
            }
            {
                isFetching
                ?   <h2>Loading...</h2>
                :   <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <Posts posts={posts}></Posts>
                    </div>

            }

        </div>
    )
}

export default App

// Using mapStateToProps / mapDispatchToProps
// rather than hook
//
// const App = ({channel, handlerChange}) => {
//     const options = [
//         "nintendo",
//         "nintendoSwitch",
//         "animalCrossing"
//     ]
//     return (
//         <div>
//             <Picker value={channel} onChange={handlerChange} options={options} />
//         </div>
//     )
// }
// const mapStateToProps = (state) => {
//     return {
//         channel: state.channel
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlerChange: (value) => {
//             dispatch(changeChannel(value))
//         }
//     }
// }
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(App)
