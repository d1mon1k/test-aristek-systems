import React from 'react'
import cl from './TagsRow.module.scss'
import Counter from './Counter'
import { TodosCounter } from '../../interfaces'

interface TagsRow {
  todosCounter: TodosCounter
}

const TagsRow: React.FC<TagsRow> = ({ todosCounter }) => {
  return (
    <div className={cl.tagsRow}>
      <Counter className={cl.total}>Total: {todosCounter.total}</Counter>
      <Counter className={cl.todo}>To do: {todosCounter.toDo}</Counter>
      <Counter className={cl.completed}>
        Completed: {todosCounter.completed}
      </Counter>
    </div>
  )
}

export default TagsRow
