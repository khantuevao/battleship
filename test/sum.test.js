import { Ship, Gameboard } from "../src";

// Ship factory

test('check if position 0 is hit', () => {
  const ship1 = Ship(2);
  ship1.hit(0);
  expect(ship1.position[0]).toBe(true);
});

test('check if position 1 is hit', () => {
  const ship1 = Ship(2);
  ship1.hit(1);
  expect(ship1.position[1]).toBe(true);
});

test('check if position 0 is not hit when position 1 is hit', () => {
  const ship1 = Ship(2);
  ship1.hit(1);
  expect(ship1.position[0]).toBe(false);
});

test('check if not sunk when only 1 position is hit', () => {
  const ship1 = Ship(2);
  ship1.hit(0);
  expect(ship1.isSunk()).toBe(false);
});

test('check if sunk when all positions are hit', () => {
  const ship1 = Ship(2);
  ship1.hit(0);
  ship1.hit(1);
  expect(ship1.isSunk()).toBe(true);
});

// Gameboard factory

test('check if ship is placed correctly', () => {
  const board1 = Gameboard();
  board1.placeShip(20, 'x', 2);
  expect(board1.gameBoard[20].hasShip).toBe(true);
  expect(board1.gameBoard[21].hasShip).toBe(true);
});

test('check if ship is placed correctly', () => {
  const board1 = Gameboard();
  board1.placeShip(51, 'y', 3);
  expect(board1.gameBoard[51].hasShip).toBe(true);
  expect(board1.gameBoard[61].hasShip).toBe(true);
  expect(board1.gameBoard[71].hasShip).toBe(true);
});

test('check if a4 is a miss', () => {
  const board1 = Gameboard();
  board1.placeShip(20, 'x', 2);
  board1.recieveAttack(30);
  expect(board1.gameBoard[30].hasShip).toBe(false);
  expect(board1.gameBoard[30].isHit).toBe(true);
});

test('check if b7 is a hit', () => {
  const board1 = Gameboard();
  board1.placeShip(51, 'y', 3);
  board1.recieveAttack(71);
  expect(board1.gameBoard[71].hasShip).toBe(true);
  expect(board1.gameBoard[71].isHit).toBe(true);
});

test('check if not all ships are sunk when some are afloat', () => {
  const board1 = Gameboard();
  board1.placeShip(20, 'x', 2);
  board1.recieveAttack(20);
  board1.recieveAttack(21);
  board1.placeShip(51, 'y', 3);
  board1.recieveAttack(51);
  board1.recieveAttack(61);
  expect(board1.allAreSunk()).toBe(false);
});

test('check if all ships are sunk when none are afloat', () => {
  const board1 = Gameboard();
  board1.placeShip(20, 'y', 2);
  board1.recieveAttack(20);
  board1.recieveAttack(30);
  board1.placeShip(51, 'x', 3);
  board1.recieveAttack(51);
  board1.recieveAttack(52);
  board1.recieveAttack(53);
  expect(board1.allAreSunk()).toBe(true);
});