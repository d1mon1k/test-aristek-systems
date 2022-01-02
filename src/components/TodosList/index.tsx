import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { NewTodo } from '../../types/interfaces'
import ItemTodo from '../ItemTodo'
import cl from './styles.module.scss'

interface Props {
  partTasks: Array<NewTodo>
  onEdit?: (todoItem: NewTodo) => void
  onRemove: ( todoItem: NewTodo) => void
  onCheckboxChange: (todoItem: NewTodo) => void
}

const TodosList: React.FC<Props> = ({ partTasks, onEdit, onRemove, onCheckboxChange }) => {
  return (
    <ul className={cl.todosList}>
      <TransitionGroup component={null}>
        {partTasks.map((todoItem) => {
          return (
            <CSSTransition
              key={todoItem.id}
              timeout={500}
              classNames="item-todo"
            >
              <ItemTodo
                onEdit={onEdit}
                onRemove={onRemove}
                onCheckboxChange={onCheckboxChange}
                todoItem={todoItem}
                title={todoItem.title}
              />
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </ul>
  )
}

export default TodosList
