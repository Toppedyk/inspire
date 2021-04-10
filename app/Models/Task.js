export default class Task{
  constructor({description, completed, id = '' }){
    this.description = description
    this.completed = completed || false
    this.id=id
  }

  get Template(){
    return `
    <div class= "d-flex justify-content-between">
      <div>
        <input type="checkbox"  onclick="app.tasksController.checkTask('${this.id}')" class = "ml-3 mb-1" ${this.completed ? 'checked':''}> ${this.description} 
      </div>
      <div>
        <i class="fas fa-times text-danger text-right" onclick="app.tasksController.removeTask('${this.id}')"></i>
      </div>
    </div>
    `
  }
}