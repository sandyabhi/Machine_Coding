import { useEffect, useState } from "react";
import Cell from "./components/Cell";
import "./styles.css";

export default function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);

  const message = "It is " + go + "'s turn.";

  console.log(cells);

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    winningCombos.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === "circle");

      if (circleWins) {
        setWinningMessage("Circle Wins");
      }
    });

    winningCombos.forEach((array) => {
      let crossWins = array.every((cell) => cells[cell] === "cross");
      if (crossWins) {
        setWinningMessage("Cross Wins");
      }
    });
  };

  useEffect(() => {
    checkScore();
  }, [cells]);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <hr />
      <div className="app">
        <div className="gameboard">
          {cells.map((cell, index) => (
            <Cell
              key={index}
              id={index}
              cell={cell}
              setCells={setCells}
              go={go}
              setGo={setGo}
              cells={cells}
              winningMessage={winningMessage}
            />
          ))}
        </div>

        <p>{winningMessage || message}</p>
      </div>
    </>
  );
}
