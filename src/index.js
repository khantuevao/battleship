export { Ship, Gameboard };

function Ship(len, pos) {
  const length = len;

  const position = pos();

  function hit(num) {
    const found = position.find(element => element.name === num)
    found.isHit = true;
  }

  function isSunk() {
    let hits = 0;
    position.forEach((entry) => {
      if (entry.isHit === true) hits++;
    });
    return hits === length;
  }

  return { position, hit, isSunk };
}

function Gameboard() {
  const board = [];
  for (let i =  0; i < 100; i++) {
    board.push({hasShip: false, location: undefined, isHit: false});
  }

  const ships = [];

  function placeShip(point, axis, length) {
    const shipPosition = () => {
      const position = [];
      position.push({name: point, isHit: false})
      for (let i = 1; i < length; i++) {
        if (axis === 'x') {
          position.push({name: (point + i), isHit: false})
        } else if (axis === 'y') {
          position.push({name: (point + i * 10), isHit: false})
        }
      }
      return position;
    }

    const newShip = Ship(length, shipPosition);
    ships.push(newShip);

    board[point].hasShip = true;
    board[point].location = ships.length - 1;
    for (let i = 1; i < length; i++) {
      if (axis === 'x') {
        board[point + i].hasShip = true;
        board[point + i].location = ships.length - 1;
      } else if (axis === 'y') {
        board[point + i * 10].hasShip = true;
        board[point + i * 10].location = ships.length - 1;
      }
    }
  }

  const missedShots = [];

  function recieveAttack(num) {
    if (board[num].hasShip === true && board[num].isHit === false) {
      ships[board[num].location].hit(num);
      board[num].isHit = true;
    } else if (board[num].hasShip === true && board[num].isHit === true) {
      console.error('already hit');
    } else if (board[num].hasShip === false && board[num].isHit === false) {
      board[num].isHit = true;
      missedShots.push(num);
    } else if (board[num].hasShip === false && board[num].isHit === true) {
      console.error('already hit');
    }
  }

  function allAreSunk() {
    function shipIsHit(entry) {
      return (entry.hasShip === true === entry.isHit);
    }
    return board.every(shipIsHit);
  }

  return {board, ships, placeShip, recieveAttack, missedShots, allAreSunk}
}

function Player() {
  const gameBoard = Gameboard();
  function attackComputer(num) {
    computer.gameBoard.recieveAttack(num);
  }
  function attackPlayer() {
    function generate() {
      const random = Math.floor(Math.random() * 100);
      if (player.board[random].isHit === true) generate();
      return random;
    }
    player.gameBoard.recieveAttack(generate());
  }
  return {gameBoard, attackComputer, attackPlayer}
}

const player = Player();

const computer = Player();