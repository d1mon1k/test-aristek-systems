import React from 'react'
import cl from './styles.module.scss'
import { TodosCounter } from '../../types/interfaces'
import Counter from './Counter'

interface Props {
  todosCounter: TodosCounter
}

const TagsRow: React.FC<Props> = ({ todosCounter }) => {
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
