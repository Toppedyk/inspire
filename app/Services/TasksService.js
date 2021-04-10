import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import {sandboxApi} from "../Services/AxiosService.js"



class TasksService{
async addTask(newTask){
  let res = await sandboxApi.post('', newTask)
  ProxyState.myTasks = [...ProxyState.myTasks, new Task(res.data)]
}

async getTasks(){
  let res = await sandboxApi.get()
  ProxyState.myTasks = res.data.map(t => new Task(t))
}

async checkTask(id){
  let task = ProxyState.myTasks.find(t => t.id === id)
  if (task.completed == false){
    task.completed = true
  }else{
    task.completed = false
  }
  await sandboxApi.put(task.id, task)
  ProxyState.myTasks=ProxyState.myTasks
}

async removeTask(id){
  let task = ProxyState.myTasks.find(t => t.id === id)
  await sandboxApi.delete(task.id)
  ProxyState.myTasks = ProxyState.myTasks.filter(t => t.id !== id)
}
}
export const tasksService = new TasksService();