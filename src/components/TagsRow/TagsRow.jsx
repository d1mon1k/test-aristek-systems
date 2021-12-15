import React from 'react'
import './TagsRow.scss'
import Counter from './Counter'

const TagsRow = ({ todosCounter }) => {
  return (
    <div className="tags-row">
      <Counter className="tags-row__total">Total: {todosCounter.total}</Counter>
      <Counter className="tags-row__todo">To do: {todosCounter.toDo}</Counter>
      <Counter className="tags-row__completed">Completed: {todosCounter.completed}</Counter>
    </div>
  )
}

export default TagsRow
