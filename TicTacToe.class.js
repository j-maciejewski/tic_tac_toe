class TicTacToe {
  constructor(_tiles) {
    this.tiles = _tiles
    this.turn = 'PLAYER_1'
  }

  onTileClick(tile) {
    return evt => {
      if (tile.hasOwnProperty('player')) return

      if (this.turn === 'PLAYER_1') {
        tile.node.classList.add('o')
        tile.player = 'PLAYER_1'
      } else if (this.turn === 'PLAYER_2') {
        tile.node.classList.add('x')
        tile.player = 'PLAYER_2'
      }

      const playerTiles = this.tiles.filter(tile => tile.player === this.turn)
      const usedTilesCount = this.tiles.filter(tile => tile.player).length

      if (this.checkForWin(playerTiles)) this.endGame(this.turn)
      else if (usedTilesCount < 9) this.swapTurns()
      else this.endGame()
    }
  }

  swapTurns() {
    if (this.turn === 'PLAYER_1') this.turn = 'PLAYER_2'
    else if (this.turn === 'PLAYER_2') this.turn = 'PLAYER_1'
  }

  checkForWin(tiles) {
    for (let i = 1; i <= 3; i++) {
      if (tiles.filter(({ col }) => col === i).length === 3) {
        return true
      }
    }

    for (let i = 1; i <= 3; i++) {
      if (tiles.filter(({ row }) => row === i).length === 3) {
        return true
      }
    }

    if (
      [this.tiles[0], this.tiles[4], this.tiles[8]].every(
        ({ player }) => player === this.turn,
      )
    )
      return true

    if (
      [this.tiles[2], this.tiles[6], this.tiles[6]].every(
        ({ player }) => player === this.turn,
      )
    )
      return true

    return false
  }

  endGame(player) {
    if (player) alert(`Player ${this.turn} won`)
    else alert(`Draw`)

    setTimeout(() => this.resetGame(), 2000)
  }

  resetGame() {
    this.turn = 'PLAYER_1'
    this.tiles.forEach(tile => {
      tile.node.classList.remove('x', 'o')
      delete tile.player
    })
  }

  init() {
    this.tiles.forEach(tile => {
      tile.node.addEventListener('click', this.onTileClick(tile))
    })
  }
}
