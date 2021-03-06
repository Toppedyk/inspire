import { ProxyState } from "../AppState.js";
import { imageApi } from "./AxiosService.js";

class ImagesService{
  async getImage(){
    let res = await imageApi.get()
    ProxyState.bgImg = res.data.url
  }
}

export const imagesService = new ImagesService();