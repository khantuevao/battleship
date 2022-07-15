import { Ship, Gameboard } from "../src";

// Ship factory

test('check if position 30 is hit', () => {
  const board1 = Gameboard();
  board1.placeShip(30, 'y', 3);
  board1.recieveAttack(30);
  expect(board1.ships[0].position[0].isHit).toBe(true);
});

test('check if position 30 is not hit', () => {
  const board1 = Gameboard();
  board1.placeShip(30, 'y', 3);
  board1.recieveAttack(40);
  expect(board1.ships[0].position[1].isHit).toBe(true);
  expect(board1.ships[0].position[0].isHit).toBe(false);
});

test('check if not sunk when only 1 position is hit', () => {
  const board1 = Gameboard();
  board1.placeShip(30, 'y', 3);
  board1.recieveAttack(40);
  expect(board1.ships[0].isSunk()).toBe(false);
});

test('check if sunk when all positions are hit', () => {
  const board1 = Gameboard();
  board1.placeShip(30, 'y', 3);
  board1.recieveAttack(30);
  board1.recieveAttack(40);
  board1.recieveAttack(50);
  expect(board1.ships[0].isSunk()).toBe(true);});

// Gameboard factory

test('check if ship is placed correctly on x axis', () => {
  const board1 = Gameboard();
  board1.placeShip(20, 'x', 2);
  expect(board1.board[20].hasShip).toBe(true);
  expect(board1.board[21].hasShip).toBe(true);
});

test('check if ship is placed correctly on y axis', () => {
  const board1 = Gameboard();
  board1.placeShip(51, 'y', 3);
  expect(board1.board[51].hasShip).toBe(true);
  expect(board1.board[61].hasShip).toBe(true);
  expect(board1.board[71].hasShip).toBe(true);
});

test('check if a4 is a miss', () => {
  const board1 = Gameboard();
  board1.placeShip(20, 'x', 2);
  board1.recieveAttack(30);
  expect(board1.board[30].hasShip).toBe(false);
  expect(board1.board[30].isHit).toBe(true);
  expect(board1.ships[0].position[0].isHit).toBe(false);
  expect(board1.ships[0].position[1].isHit).toBe(false);
});

test('check if b7 is a hit', () => {
  const board1 = Gameboard();
  board1.placeShip(51, 'y', 3);
  board1.recieveAttack(71);
  expect(board1.board[71].hasShip).toBe(true);
  expect(board1.board[71].isHit).toBe(true);
  expect(board1.ships[0].position[2].name).toBe(71);
  expect(board1.ships[0].position[2].isHit).toBe(true);
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