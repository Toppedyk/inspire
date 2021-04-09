import { ProxyState } from "../AppState.js"
import {quotesService} from "../Services/QuotesService.js"

function _drawQuote(){
  let quote = ProxyState.myQuote
  document.getElementById('quote').innerHTML = quote.Template
}


export default class QuotesController{
  constructor(){
    ProxyState.on('myQuote', _drawQuote)
    this.getQuote()
  }

  async getQuote(){
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error(error)
    }
  }

}