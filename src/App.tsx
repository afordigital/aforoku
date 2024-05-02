import { GridBackgroundDemo } from "./ui/GridBackground";
import { sudoku1 } from "./sudokus/sudoku-1";
import { deleteCells } from "./hooks/useDeleteCells";
import { useState } from "react";
import { Modal } from "./components/Modal";

type Cell = {
  i: number | null;
  j: number | null;
};

function App() {
  const [currentSudoku, setCurrentSudoku] = useState(deleteCells(sudoku1));
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<Cell>({ i: null, j: null });
  const isGameOver = currentSudoku.every((row) => {
    return row.every((col) => col != "");
  });

  console.log(isGameOver);

  const completeSudoku = () => {
    setCurrentSudoku(sudoku1);
  };

  const restartSudoku = () => {
    setCurrentSudoku(deleteCells(sudoku1));
  };

  const checkValue = (row: number, col: number, value: string) => {
    if (value != "") return;
    console.log(row, col);
    setPosition({ i: row, j: col });
    setIsOpen(true);
  };

  const fillCell = (value: string) => {
    if (position.i === null || position.j === null) return;

    const aux = structuredClone(currentSudoku);
    aux[position.i][position.j] = value;
    setCurrentSudoku(aux);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-screen h-screen font-dmsans flex justify-center text-7xl items-center text-white bg-[#050505]">
      <GridBackgroundDemo>
        <section className="text-center space-y-2xl">
          <p className="text-white">AFOROKU</p>

          <article className="grid grid-cols-9 border border-collapse  font-normal text-white text-[40px]">
            {currentSudoku.map((row: string[], indexI: number) => {
              return row.map((col: string, indexJ: number) => (
                <>
                  <button
                    onClick={() => checkValue(indexI, indexJ, col)}
                    className={`flex items-center border-[0.15px] ${
                      indexI % 3 === 0 ? "border-t-4" : ""
                    } ${indexJ % 3 === 0 ? "border-l-4" : ""}
                  ${indexI >= 8 ? "border-b-4" : ""}
                  ${indexJ >= 8 ? "border-r-4" : ""}
                   justify-center w-16 h-16`}
                  >
                    {col}
                  </button>
                </>
              ));
            })}
            {isOpen && <Modal valueSelected={fillCell} onClose={onClose} />}
          </article>
          <div className="flex justify-center w-full gap-2">
            <button
              onClick={completeSudoku}
              className="text-[24px] hover:bg-gray-2 px-4 py-2 text-black bg-white rounded-md"
            >
              Resolver Sudoku
            </button>
            <button
              onClick={restartSudoku}
              className="text-[24px] hover:bg-gray-2 px-4 py-2 text-black bg-white rounded-md"
            >
              Empezar juego
            </button>
          </div>
        </section>
      </GridBackgroundDemo>
    </div>
  );
}

export default App;
