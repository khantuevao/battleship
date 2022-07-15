/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });


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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMkI7O0FBRTNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCLGdCQUFnQixrREFBa0Q7QUFDbEU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQyxzQkFBc0IsWUFBWTtBQUNsQztBQUNBLHlCQUF5QixnQ0FBZ0M7QUFDekQsVUFBVTtBQUNWLHlCQUF5QixxQ0FBcUM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTs7QUFFQSwwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkIH07XG5cbmZ1bmN0aW9uIFNoaXAobGVuLCBwb3MpIHtcbiAgY29uc3QgbGVuZ3RoID0gbGVuO1xuXG4gIGNvbnN0IHBvc2l0aW9uID0gcG9zKCk7XG5cbiAgZnVuY3Rpb24gaGl0KG51bSkge1xuICAgIGNvbnN0IGZvdW5kID0gcG9zaXRpb24uZmluZChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gbnVtKVxuICAgIGZvdW5kLmlzSGl0ID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICBsZXQgaGl0cyA9IDA7XG4gICAgcG9zaXRpb24uZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0hpdCA9PT0gdHJ1ZSkgaGl0cysrO1xuICAgIH0pO1xuICAgIHJldHVybiBoaXRzID09PSBsZW5ndGg7XG4gIH1cblxuICByZXR1cm4geyBwb3NpdGlvbiwgaGl0LCBpc1N1bmsgfTtcbn1cblxuZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBmb3IgKGxldCBpID0gIDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGJvYXJkLnB1c2goe2hhc1NoaXA6IGZhbHNlLCBsb2NhdGlvbjogdW5kZWZpbmVkLCBpc0hpdDogZmFsc2V9KTtcbiAgfVxuXG4gIGNvbnN0IHNoaXBzID0gW107XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHBvaW50LCBheGlzLCBsZW5ndGgpIHtcbiAgICBjb25zdCBzaGlwUG9zaXRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IFtdO1xuICAgICAgcG9zaXRpb24ucHVzaCh7bmFtZTogcG9pbnQsIGlzSGl0OiBmYWxzZX0pXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChheGlzID09PSAneCcpIHtcbiAgICAgICAgICBwb3NpdGlvbi5wdXNoKHtuYW1lOiAocG9pbnQgKyBpKSwgaXNIaXQ6IGZhbHNlfSlcbiAgICAgICAgfSBlbHNlIGlmIChheGlzID09PSAneScpIHtcbiAgICAgICAgICBwb3NpdGlvbi5wdXNoKHtuYW1lOiAocG9pbnQgKyBpICogMTApLCBpc0hpdDogZmFsc2V9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U2hpcCA9IFNoaXAobGVuZ3RoLCBzaGlwUG9zaXRpb24pO1xuICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7XG5cbiAgICBib2FyZFtwb2ludF0uaGFzU2hpcCA9IHRydWU7XG4gICAgYm9hcmRbcG9pbnRdLmxvY2F0aW9uID0gc2hpcHMubGVuZ3RoIC0gMTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgIGJvYXJkW3BvaW50ICsgaV0uaGFzU2hpcCA9IHRydWU7XG4gICAgICAgIGJvYXJkW3BvaW50ICsgaV0ubG9jYXRpb24gPSBzaGlwcy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIGlmIChheGlzID09PSAneScpIHtcbiAgICAgICAgYm9hcmRbcG9pbnQgKyBpICogMTBdLmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICBib2FyZFtwb2ludCArIGkgKiAxMF0ubG9jYXRpb24gPSBzaGlwcy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1pc3NlZFNob3RzID0gW107XG5cbiAgZnVuY3Rpb24gcmVjaWV2ZUF0dGFjayhudW0pIHtcbiAgICBpZiAoYm9hcmRbbnVtXS5oYXNTaGlwID09PSB0cnVlICYmIGJvYXJkW251bV0uaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICBzaGlwc1tib2FyZFtudW1dLmxvY2F0aW9uXS5oaXQobnVtKTtcbiAgICAgIGJvYXJkW251bV0uaXNIaXQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoYm9hcmRbbnVtXS5oYXNTaGlwID09PSB0cnVlICYmIGJvYXJkW251bV0uaXNIaXQgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2FscmVhZHkgaGl0Jyk7XG4gICAgfSBlbHNlIGlmIChib2FyZFtudW1dLmhhc1NoaXAgPT09IGZhbHNlICYmIGJvYXJkW251bV0uaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICBib2FyZFtudW1dLmlzSGl0ID0gdHJ1ZTtcbiAgICAgIG1pc3NlZFNob3RzLnB1c2gobnVtKTtcbiAgICB9IGVsc2UgaWYgKGJvYXJkW251bV0uaGFzU2hpcCA9PT0gZmFsc2UgJiYgYm9hcmRbbnVtXS5pc0hpdCA9PT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5lcnJvcignYWxyZWFkeSBoaXQnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhbGxBcmVTdW5rKCkge1xuICAgIGZ1bmN0aW9uIHNoaXBJc0hpdChlbnRyeSkge1xuICAgICAgcmV0dXJuIChlbnRyeS5oYXNTaGlwID09PSB0cnVlID09PSBlbnRyeS5pc0hpdCk7XG4gICAgfVxuICAgIHJldHVybiBib2FyZC5ldmVyeShzaGlwSXNIaXQpO1xuICB9XG5cbiAgcmV0dXJuIHtib2FyZCwgc2hpcHMsIHBsYWNlU2hpcCwgcmVjaWV2ZUF0dGFjaywgbWlzc2VkU2hvdHMsIGFsbEFyZVN1bmt9XG59XG5cbmZ1bmN0aW9uIFBsYXllcigpIHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGZ1bmN0aW9uIGF0dGFja0NvbXB1dGVyKG51bSkge1xuICAgIGNvbXB1dGVyLmdhbWVCb2FyZC5yZWNpZXZlQXR0YWNrKG51bSk7XG4gIH1cbiAgZnVuY3Rpb24gYXR0YWNrUGxheWVyKCkge1xuICAgIGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgIGlmIChwbGF5ZXIuYm9hcmRbcmFuZG9tXS5pc0hpdCA9PT0gdHJ1ZSkgZ2VuZXJhdGUoKTtcbiAgICAgIHJldHVybiByYW5kb207XG4gICAgfVxuICAgIHBsYXllci5nYW1lQm9hcmQucmVjaWV2ZUF0dGFjayhnZW5lcmF0ZSgpKTtcbiAgfVxuICByZXR1cm4ge2dhbWVCb2FyZCwgYXR0YWNrQ29tcHV0ZXIsIGF0dGFja1BsYXllcn1cbn1cblxuY29uc3QgcGxheWVyID0gUGxheWVyKCk7XG5cbmNvbnN0IGNvbXB1dGVyID0gUGxheWVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9