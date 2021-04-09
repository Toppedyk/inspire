import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js"

function _drawWeather(){
  let weather = ProxyState.myWeather
  document.getElementById('weather').innerHTML = weather.Template
}

function _startTime(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkHours(h)
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(_startTime, 500);
}
function checkHours(i){
  if(i>12){
    i = i%12
  }
  return i
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

export default class WeathersController{
  constructor(){
    ProxyState.on('myWeather', _drawWeather)
    this.getWeather()
    _startTime()
  }

  changeWeather(){
    weathersService.changeWeather()
  }

  async getWeather(){
    try {
      await weathersService.getWeather()
    } catch (error) {
      console.error(error)
    }
  }
}