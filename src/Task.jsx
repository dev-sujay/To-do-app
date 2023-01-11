import React from 'react'

const Task = (props) => {
    return (
        <li className='task-item'  style={{ background: props.task.isComplete && "lightgreen" }}>
            <p>{props.task.taskName}</p>
            <div className="btns">
                <button className='complete-btn btn' onClick={() => props.markAsComplete(props.task.id)} >✔</button>
                <button className="del-btn btn" onClick={() => props.deleteTask(props.task.id)}>X</button>
                <button className='edit-btn btn' onClick={() => props.editTask(props.task)}>edit</button>
            </div>
        </li>
    )
}

export default Task
