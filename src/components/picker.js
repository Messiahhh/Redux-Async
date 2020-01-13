import React from 'react'

const Picker = ({value, onChange, options}) => (
    <div>
        <h1>{value}</h1>
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            {
                options.map((option, index) => (
                    <option value={option} key={index}>{option}</option>
                ))
            }
        </select>
    </div>
)



export default Picker
