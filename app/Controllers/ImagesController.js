import { ProxyState } from "../AppState.js"
import {imagesService} from "../Services/ImagesService.js"

function _drawImage() {
  let img = ProxyState.bgImg
  document.body.style.backgroundImage = `url('${img}')`
}

export default class ImagesController{
  constructor(){
    ProxyState.on('bgImg',_drawImage)
    this.getImage()
  }

  async getImage(){
    try {
      await imagesService.getImage()
    } catch (error) {
      console.error(error)
    }
  }

}