import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ItemTodo from '../ItemTodo/ItemTodo'
import cl from './TodosList.module.scss'

const TodosList = ({ partTasks, onEdit, onRemove, onCheckboxChange }) => {
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
                onEdit={() => onEdit(todoItem)}
                onRemove={() => onRemove(todoItem)}
                onCheckboxChange={() => onCheckboxChange(todoItem)}
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
