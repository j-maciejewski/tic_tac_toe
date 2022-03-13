const tiles = Array.from(document.querySelectorAll('.board .tile')).map(tileNode => ({
  row: Number(tileNode.dataset.row),
  col: Number(tileNode.dataset.col),
  node: tileNode,
}))

const GAME_MASTER = new TicTacToe(tiles)
GAME_MASTER.init()
