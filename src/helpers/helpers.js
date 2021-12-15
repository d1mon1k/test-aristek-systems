export const groupByCompleted = (todos) => {
  const updatedTasksList = { todo: [], completed: [] }
  todos.forEach((todo) => {
    !todo.completed
      ? updatedTasksList.todo.push(todo)
      : updatedTasksList.completed.push(todo)
  })
  return updatedTasksList
}

export const improveString = (line) => {
  return line.trim().replace(/\s{2,}/g, ' ')
}