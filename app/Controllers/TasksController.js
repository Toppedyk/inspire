import { ProxyState } from "../AppState.js"
import {tasksService} from "../Services/TasksService.js"

function _drawTasks(){
  let template = ''
  let tasks = ProxyState.myTasks
  tasks.forEach(t => template += t.Template)
  document.getElementById('tasks').innerHTML = template
}

export default class TasksController{
  constructor(){
    ProxyState.on('myTasks', _drawTasks)
    this.getTasks()
  }

  async checkTask(id){
    try {
      tasksService.checkTask(id)
    } catch (error) {
      console.error(error)
    }
  }

  async getTasks(){
    try {
      await tasksService.getTasks()
    } catch (error) {
      console.error(error)
    }
  }

  async removeTask(id){
    try {
    await tasksService.removeTask(id)
    } catch (error) {
      console.error(error)
    }

  }

  async addTask(){
    window.event.preventDefault()
    let form = window.event.target
    let newTask = {
      description: form.description.value
    }
    await tasksService.addTask(newTask)
    form.reset()
  }
}