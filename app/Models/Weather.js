export default class Weather{
constructor({name, main}){
  this.name = name
  this.kelvin = main.temp
  this.c = Math.floor((this.kelvin - 273.15))
  this.f = Math.floor((this.c * (9/5)) + 32)
  this.checked = true
}

get Template(){
  return `
  <div class="card d-flex" onclick="app.weathersController.changeWeather()">
    <div class="card-body">
      <h5 class="card-title">Location: ${this.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${this.checked ? this.f+'°F' : this.c+'°C'}</h6>
    </div>
  </div>
  `
}
}