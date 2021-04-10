import { ProxyState } from "../AppState.js"
import {tasksService} from "../Services/TasksService.js"

function _drawTasks(){
  let template = ''
  let tasks = ProxyState.myTasks
  tasks.forEach(t => template += t.Template)
  document.getElementById('tasks').innerHTML = template
}

function _countTasks(){
  let tasks = ProxyState.myTasks
  let total = tasks.length
  let done = 0
  tasks.forEach(t => {
    if(t.completed === true){
      done+=1
    }
  })
  document.getElementById('listHeader').innerHTML = `To-Do List: ${done}/${total}`
}

export default class TasksController{
  constructor(){
    ProxyState.on('myTasks', _drawTasks)
    ProxyState.on('myTasks', _countTasks)
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