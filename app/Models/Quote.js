export default class Quote{
  constructor({content, author}){
    this.content = content
    this.author = author
  }

  get Template(){
    return `
    <div class = "text-center">
    <p class = "m-3 myQuote">${this.content}</p>
    <p class = "m-0 hide">${this.author}</p>
    </div>
    `
  }
}