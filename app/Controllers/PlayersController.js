import { appState } from "../AppState.js"
import { playersService } from "../Services/PlayersService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"


function _drawPlayers(data) {
  let template = ''
  appState.players.forEach(p => template += p.ActivePlayerTemplate)
  setHTML('active-player', template)
}

function _drawActiveFruit() {
  setHTML('fruit-form', `${appState.activeFruit}`)
}


// function _randomFruit(data) {
//   let fruitsArr = appState.fruits
//   let fruit = fruitsArr[Math.floor(Math.random() * fruitsArr.length)];

//   console.log('rando fruit drawn', fruit);
//   fruit += appState.activeFruit
//   setHTML('fruit-form', fruit.appState.FruitTemplate)
// }







export class PlayersController {
  constructor() {
    _drawPlayers()
    appState.on('players', _drawPlayers)
    randomFruit()
  }

  createPlayer() {
    // @ts-ignore
    window.event.preventDefault()
    const form = window.event.target
    let playerData = getFormData(form)
    console.log('controller is working', playerData);
    playersService.createPlayer(playerData)
    form.reset()
  }
}
export class FruitsController {
  constructor() {
    appState.on('activeFruit', _drawActiveFruit)
  }

  randomFruit() {
    appState.activeFruit = appState.fruits[1]
  }
}