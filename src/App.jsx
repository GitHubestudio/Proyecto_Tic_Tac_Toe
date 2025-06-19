import { useState , useEffect} from 'react'
import { Square } from './components/Square.jsx'
import { TURNS } from './logic/constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'
import { Winner } from './components/Winner.jsx'
import { resetGameStorage, saveGameStorage } from './logic/index.js'
import confetti from "canvas-confetti"
import './styles/App.css'

function App() {
  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem("board")
    if(boardFromStorage) return JSON.parse(boardFromStorage)
      return Array(9).fill(null)})

  const [turn, setTurn] = useState( () =>{
    const turnFromStorage = window.localStorage.getItem("turn")
    return turnFromStorage ?? TURNS.x
  })
  
  const [winner, setWinner] = useState(null)

  useEffect(() => {
  saveGameStorage({ board, turn })
  }, [board, turn])

  const resetGame= () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
    resetGameStorage()
  }

  const updateBoard = (index) =>{
    if(board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    //saveGameStorage({
    //  board: newBoard,
    //  turn: newTurn
    //})

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)}
    else if(checkEndGame(newBoard)){setWinner(false)}
  }

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Resetear</button>
        <section className='game'>
          {
            board.map((square, index) => {
              return(
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {square}
                </Square>
              )
            })
          }
        </section>

        <section className='turn'>
          <Square isSelected={turn === TURNS.x}>
            {TURNS.x}
          </Square>
          <Square isSelected={turn === TURNS.o}>
            {TURNS.o}
          </Square>

        </section>

        <Winner resetGame={resetGame} winner={winner}/>
      </main>
    </>
  )
}

export default App
