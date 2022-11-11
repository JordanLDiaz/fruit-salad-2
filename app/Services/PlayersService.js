import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"
import { saveState } from "../Utils/Store.js"

class PlayersService {
  createPlayer(playerData) {
    // console.log('service is working')
    let newPlayer = new Player(playerData)
    appState.players = [...appState.players, newPlayer]
    appState.activePlayer = newPlayer
    saveState('players', appState.players)
  }
}


function _randomFruit() {
  appState.activeFruit = appState.fruits[Math.floor(Math.random() * appState.fruits.length)];


}
class FruitsService {
  randomFruit() {
    appState.activeFruit = appState.fruits[Math.floor(Math.random() * appState.fruits.length)];


  }
}


export const playersService = new PlayersService