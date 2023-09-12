import "../styles.css";

function Cell({ id, cell, setCells, go, setGo, cells, winningMessage }) {
  const handleClick = (e) => {
    const taken =
      e.target &&
      e.target.firstChild &&
      (e.target.firstChild.classList.contains("circle") ||
        e.target.firstChild.classList.contains("cross"));

    if (taken == null) return;

    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
        setGo("cross");
        handleCellChange("circle");
      } else if (go === "cross") {
        e.target.firstChild.classList.add("cross");
        setGo("circle");
        handleCellChange("cross");
      }
    }
  };

  const handleCellChange = (className) => {
    const newCell = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });

    setCells(newCell);
  };

  return (
    <div
      className="cell"
      id={id}
      onClick={!winningMessage ? handleClick : () => alert(winningMessage)}
    >
      <div className={cell}></div>
    </div>
  );
}

export default Cell;
