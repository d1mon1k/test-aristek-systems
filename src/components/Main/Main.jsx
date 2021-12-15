import React, { useEffect, useState } from 'react'
import './Main.scss'
import TagsRow from '../../components/TagsRow/TagsRow'
import TodoForm from '../../components/TodoForm/TodoForm'
import TodosList from '../../components/TodosList/TodosList'
import apiService from '../../API/apiService'
import Preloader from '../Preloader/Preloader'
import { groupByCompleted, improveString } from '../../helpers/helpers'

const Main = () => {
  const [tasks, setTasks] = useState({ todo: [], completed: [] })
  const [textArea, setTextArea] = useState('')
  const [editableTask, setEditableTask] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    apiService
      .getTasks()
      .then((response) => {
        response && setTasks(groupByCompleted(response))
      })
      .then(() => setIsLoading(false))
  }, [])

  const todosCounter = {
    completed: tasks.completed.length,
    toDo: tasks.todo.length,
    total: tasks.completed.length + tasks.todo.length,
  }

  const addHandler = (e) => {
    e.preventDefault()
    const title = improveString(textArea)
    if (!title) {
      return
    }
    const newTodo = {
      userId: '1',
      id: Date.now(),
      title,
      completed: false,
    }
    apiService.postTask(newTodo)
    setTasks((prev) => ({ ...prev, todo: [newTodo, ...prev.todo] }))
    setTextArea('')
  }

  const saveHandler = (e) => {
    e.preventDefault()
    const title = improveString(textArea)
    if (!title) {
      return
    }
    apiService.editTask(editableTask.id, { ...editableTask, title })
    setTextArea('')
    setEditableTask(null)
  }

  const editHandler = (todoItem) => {
    setTextArea(todoItem.title)
    setEditableTask(todoItem)
  }

  const removeHandler = (todoItem) => {
    let todosArr = [...tasks.todo, ...tasks.completed]
    todosArr = todosArr.filter((task) => task.id !== todoItem.id)
    const newTasksList = groupByCompleted(todosArr)
    apiService.deleteTask(todoItem.id)
    setTasks(newTasksList)
  }

  const checkboxChangeHandler = (todoItem) => {
    let todosArr = [...tasks.todo, ...tasks.completed]
    todosArr = todosArr.filter((task) => task.id !== todoItem.id)
    const todoItemCopy = { ...todoItem, completed: !todoItem.completed }
    const newTasksList = todoItemCopy.completed
      ? groupByCompleted([todoItemCopy, ...todosArr])
      : groupByCompleted([...todosArr, todoItemCopy])
    setTasks(newTasksList)
  }

  const taskChangeHandler = (newTitle) => {
    const tasksCopy = { ...tasks }
    tasksCopy.todo.forEach((task) => {
      if (editableTask.id === task.id) {
        task.title = improveString(newTitle)
      }
    })
    setTasks(tasksCopy)
  }

  const inputChangeHandler = ({ target }) => {
    setTextArea(target.value)
    if (editableTask) {
      taskChangeHandler(target.value)
    }
  }

  if (isLoading) {
    return <Preloader />
  }
  return (
    <main className="main">
      <div className="main__todo-form">
        <TodoForm
          onAdd={addHandler}
          onSave={saveHandler}
          onInputChange={inputChangeHandler}
          editableTask={editableTask}
          textArea={textArea}
        />
        <TagsRow todosCounter={todosCounter} />
      </div>
      <div className="main__todos">
        <h2>To do ({todosCounter.toDo})</h2>
        <TodosList
          onEdit={editHandler}
          onRemove={removeHandler}
          onCheckboxChange={checkboxChangeHandler}
          partTasks={tasks.todo}
        />
      </div>
      <div className="main__completed">
        <h2>Completed ({todosCounter.completed})</h2>
        <TodosList
          onRemove={removeHandler}
          onCheckboxChange={checkboxChangeHandler}
          partTasks={tasks.completed}
        />
      </div>
    </main>
  )
}

export default Main
