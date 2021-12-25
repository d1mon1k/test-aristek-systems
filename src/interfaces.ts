export interface NewTodo {
  userId: string
  id: number
  title: string
  completed: boolean
}

export interface TodosCounter {
  completed: number
  toDo: number
  total: number
}
