import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'

import Picker from '../components/picker'
import Posts from '../components/posts'
import {
    changeChannel,
    fetchPosts
} from '../actions'



const App = () => {
    const options = [
        "nintendo",
        "nintendoSwitch",
        "animalCrossing"
    ]

    const dispatch = useDispatch()

    const channel = useSelector(state => state.channel)
    let handlerChange = (value) => {
        dispatch(changeChannel(value))
    }

    const posts = useSelector(state => state.posts.items)
    useEffect(() => {
        dispatch(fetchPosts(channel))
    }, [channel])




    return (
        <div>
            <Picker value={channel} onChange={handlerChange} options={options} />
            <Posts posts={posts}></Posts>
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
