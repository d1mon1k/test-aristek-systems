import React, { useEffect, useState } from 'react'
import cl from './styles.module.scss'
import apiService from '../../API/apiService'
import Preloader from '../Preloader'
import { groupByCompleted, improveString } from '../../helpers'
import { NewTodo } from '../../types/interfaces'
import TodoForm from '../TodoForm'
import TagsRow from '../TagsRow'
import TodosList from '../TodosList'

export interface State {
  todo: Array<NewTodo>
  completed: Array<NewTodo>
}

const Main: React.FC = () => {
  const [tasks, setTasks] = useState<State>({ todo: [], completed: [] })
  const [textArea, setTextArea] = useState<string>('')
  const [editableTask, setEditableTask] = useState<NewTodo | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

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

  const addHandler = (e: React.FormEvent) => {
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

  const saveHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const title = improveString(textArea)
    if (!title) {
      return
    }
    apiService.editTask(editableTask!.id, { ...editableTask!, title })
    setTextArea('')
    setEditableTask(null)
  }

  const editHandler = (todoItem: NewTodo): void => {
    setTextArea(todoItem.title)
    setEditableTask(todoItem)
  }

  const removeHandler = (todoItem: NewTodo): void => {
    let todosArr = [...tasks.todo, ...tasks.completed]
    todosArr = todosArr.filter((task) => task.id !== todoItem.id)
    const newTasksList = groupByCompleted(todosArr)
    apiService.deleteTask(todoItem.id)
    setTasks(newTasksList)
  }

  const checkboxChangeHandler = (todoItem: NewTodo): void => {
    let todosArr = [...tasks.todo, ...tasks.completed]
    todosArr = todosArr.filter((task) => task.id !== todoItem.id)
    const todoItemCopy = { ...todoItem, completed: !todoItem.completed }
    const newTasksList = todoItemCopy.completed
      ? groupByCompleted([todoItemCopy, ...todosArr])
      : groupByCompleted([...todosArr, todoItemCopy])
    setTasks(newTasksList)
  }

  const taskChangeHandler = (newTitle: string): void => {
    const tasksCopy = { ...tasks }
    tasksCopy.todo.forEach((task) => {
      if (editableTask!.id === task.id) {
        task.title = improveString(newTitle)
      }
    })
    setTasks(tasksCopy)
  }

  const inputChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setTextArea(target.value)
    if (editableTask) {
      taskChangeHandler(target.value)
    }
  }

  if (isLoading) {
    return <Preloader />
  }
  return (
    <main className={cl.main}>
      <div className={cl.todoForm}>
        <TodoForm
          onAdd={addHandler}
          onSave={saveHandler}
          onInputChange={inputChangeHandler}
          editableTask={editableTask}
          textArea={textArea}
        />
        <TagsRow todosCounter={todosCounter} />
      </div>
      <div className={cl.todos}>
        <h2>To do ({todosCounter.toDo})</h2>
        <TodosList
          onEdit={editHandler}
          onRemove={removeHandler}
          onCheckboxChange={checkboxChangeHandler}
          partTasks={tasks.todo}
        />
      </div>
      <div className={cl.completed}>
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
