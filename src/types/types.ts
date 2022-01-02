import { NewTodo } from './interfaces'

export type CheckboxChangeFunction = (todoItem: NewTodo) => void

export type EditFunction = (todoItem: NewTodo) => void
export type RemoveFunction = (todoItem: NewTodo) => void
export type CopyTextFunction = () => void
export type OnBtnClick = EditFunction | RemoveFunction | CopyTextFunction

export type onSave = (e: React.FormEvent) => void
export type onAdd = (e: React.FormEvent) => void
