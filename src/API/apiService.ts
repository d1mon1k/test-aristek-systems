import { NewTodo } from './../interfaces';
import axios from 'axios'

export default class apiService {
  static async getTasks() {
    try {
      const todos = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?userId=1'
      )
      return todos.data
    } catch (err) {
      console.log(err)
    }
  }

  static async postTask(newTask: NewTodo) {
    try {
      await axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
    } catch (err) {
      console.log(err)
    }
  }

  static async editTask(id: number, editedTask: NewTodo) {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        editedTask
      )
    } catch (err) {
      console.log(err)
    }
  }

  static async deleteTask(id: number) {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    } catch (err) {
      console.log(err)
    }
  }
}
