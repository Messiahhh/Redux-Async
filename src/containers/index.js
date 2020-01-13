import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Picker from '../components/picker'
import { changeChannel } from '../actions'
const App = () => {
    const options = [
        "nintendo",
        "nintendoSwitch",
        "animalCrossing"
    ]
    const channel = useSelector(state => state.channel)
    const dispatch = useDispatch()

    

    let handlerChange = (value) => {
        dispatch(changeChannel(value))
    }
    return (
        <div>
            <Picker value={channel} onChange={handlerChange} options={options} />
        </div>
    )
}

export default App
