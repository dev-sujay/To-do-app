import './index.css'
import React from 'react'
import { useState } from 'react';
import Task from './Task';
import Input from './Input';

const App = () => {
  const [newTask, setnewTask] = useState("");
  const [todoList, settodoList] = useState([]);
  const [editId, seteditId] = useState(null);
  const [toggleSubmitBtn, settoggleSubmitBtn] = useState(false);


  const inputChangeHandler = (e) => {
    setnewTask(e.target.value)
  }

  const addItem = () => {
    if (!newTask) {
      alert("plz enter a value")
    } else if (newTask && toggleSubmitBtn) {
      settodoList(todoList.map((task) => {
        if (task.id == editId) {
          return ({ ...task, taskName: newTask })
        } else {
          return task
        }
      }))
      setnewTask("")
      settoggleSubmitBtn(false)
      seteditId(null)

    } else {
      const task = {
        taskName: newTask,
        id: new Date().getTime().toString(),
        isComplete: false
      }
      settodoList([...todoList, task])
    }
    setnewTask("")
  }

  const deleteTask = (id) => {
    settodoList(todoList.filter((task) => task.id != id))
  }

  const editTask = (task) => {
    setnewTask(task.taskName)
    seteditId(task.id)
    settoggleSubmitBtn(true)
  }

  const markAsComplete = (id) => {
    settodoList(todoList.map((task) => {
      if (task.id == id) {
        return ({ ...task, isComplete: true })
      } else {
        return task
      }
    }))
  }

  return (
    <div className='App'>
      <Input
        value={newTask}
        onChange={inputChangeHandler}
        toggleSubmitBtn={toggleSubmitBtn}
        addItem={addItem}
      />
      <div className="task-list">
        <ul>
          {todoList.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                editTask={editTask}
                markAsComplete={markAsComplete}
                deleteTask={deleteTask}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
