function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export const deleteCells = (sudoku: string[][]) => {
  return sudoku.map((row) => {
    return row.map((col) => {
      return getRandomInt(6) > 1 ? col : "";
    });
  });
};
