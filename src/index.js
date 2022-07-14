export { Ship, Gameboard };

function Ship(len) {
  const length = len;

  const position = [];
  for (let i = 0; i < length; i++) {
    position[i] = false;
  }

  function hit(num) {
    position[num] = true;
  }

  function isSunk() {
    let hits = 0;
    position.forEach((pos) => {
      if (pos === true) hits++;
    });
    return hits === length;
  }

  return { position, hit, isSunk };
}

function Gameboard() {
  const gameBoard = [];
  for (let i =  0; i < 100; i++) {
    gameBoard.push({hasShip: false, isHit: false});
  }

  function placeShip(point, axis, length) {
    gameBoard[point].hasShip = true;
    if (axis === 'x') {
      for (let i = 1; i < length; i++) {
        gameBoard[point + i].hasShip = true;
      } 
    } else if (axis === 'y') {
      for (let i = 1; i < length; i++) {
        gameBoard[point + (i * 10)].hasShip = true;
      } 
    }
  }

  function recieveAttack(num) {
    gameBoard[num].isHit = true;
  }

  function allAreSunk() {
    function shipIsHit(entry) {
      return (entry.hasShip === true === entry.isHit);
    }
    return gameBoard.every(shipIsHit);
  }

  return {gameBoard, placeShip, recieveAttack, allAreSunk}
}
