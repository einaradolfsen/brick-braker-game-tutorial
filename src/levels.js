import Brick from "./brick.js";

// 48:12
export function buildLevel(game, level) {
  let bricks = [];
  level.forEach((row, rowIdx) => {
    row.forEach((brick, brickIdx) => {
      if (brick === 0) return;
      let position = {
        x: 80 * brickIdx,
        y: 75 + 24 * rowIdx
      };
      //{ x: rowIdx * 80, y: brickIdx * 24 }
      bricks.push(new Brick(game, position));
    });
  });

  return bricks;
}

export const level1 = [
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
