import { State } from './../components/Main/index'
import { NewTodo } from '../types/interfaces'

export const groupByCompleted = (todos: Array<NewTodo>) => {
  return todos.reduce<State>((tasks, task) => {
    !task.completed ? tasks.todo.push(task) : tasks.completed.push(task)
    return tasks
  }, { todo: [], completed: [] })
}

export const improveString = (line: string): string => {
  return line.trim().replace(/\s{2,}/g, ' ')
}
