import { generateId } from "../Utils/generateId.js";

export class Player {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.score = 0
  }



  get ActivePlayerTemplate() {
    return `
    <div class="col-4 d-flex border border-info justify-content-between">
        <h2>${this.name}</h2>
        <h2>${this.score}</h2>
      </div>
    `
  }
}


export class Fruit {

  // constructor(data) {
  //   this.fruit = data.fruit




  get FruitTemplate() {
    return `
    <div class="col-6 card p-2 ">
        <h1 class="text-center">${activeFruit}</h1>
        <input class="" type="text" placeholder="type the fruit" >

      </div>
    `
  }

}