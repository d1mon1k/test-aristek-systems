import { Tasks } from './../components/Main/Main';
import { NewTodo } from '../interfaces'

export const groupByCompleted = (todos: Array<NewTodo>) => {
  const updatedTasksList: Tasks = { todo: [], completed: [] }
  todos.forEach((todo) => {
    !todo.completed
      ? updatedTasksList.todo.push(todo)
      : updatedTasksList.completed.push(todo)
  })
  return updatedTasksList
}

export const improveString = (line: string): string => {
  return line.trim().replace(/\s{2,}/g, ' ')
}
