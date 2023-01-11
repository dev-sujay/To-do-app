import React from 'react'

const Input = (props) => {
    return (
        <div className="user-input">
            <input value={props.value} onChange={props.onChange} />
            {props.toggleSubmitBtn ? <button className='edit btn' onClick={props.addItem}>edit</button> : <button className='add btn' onClick={props.addItem}>+</button>}
        </div>
    )
}

export default Input
