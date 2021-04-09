import { ProxyState } from "../AppState.js"
import Weather from "../Models/Weather.js"
import {weatherApi} from "../Services/AxiosService.js"


class WeathersService{
  async getWeather(){
    let res = await weatherApi.get()
    ProxyState.myWeather = new Weather(res.data)
  }

  changeWeather(){
    let w = ProxyState.myWeather
    if(w.checked == true){
      w.checked = false
    }else{
      w.checked = true
    }
    ProxyState.myWeather = ProxyState.myWeather
  }
}

export const weathersService = new WeathersService()