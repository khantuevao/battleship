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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMkI7O0FBRTNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUIsU0FBUztBQUM1QixnQkFBZ0Isa0RBQWtEO0FBQ2xFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0Msc0JBQXNCLFlBQVk7QUFDbEM7QUFDQSx5QkFBeUIsZ0NBQWdDO0FBQ3pELFVBQVU7QUFDVix5QkFBeUIscUNBQXFDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsVUFBVTtBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQgfTtcblxuZnVuY3Rpb24gU2hpcChsZW4sIHBvcykge1xuICBjb25zdCBsZW5ndGggPSBsZW47XG5cbiAgY29uc3QgcG9zaXRpb24gPSBwb3MoKTtcblxuICBmdW5jdGlvbiBoaXQobnVtKSB7XG4gICAgY29uc3QgZm91bmQgPSBwb3NpdGlvbi5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBudW0pXG4gICAgZm91bmQuaXNIaXQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBwb3NpdGlvbi5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgaWYgKGVudHJ5LmlzSGl0ID09PSB0cnVlKSBoaXRzKys7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhpdHMgPT09IGxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiB7IHBvc2l0aW9uLCBoaXQsIGlzU3VuayB9O1xufVxuXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG5cbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgZm9yIChsZXQgaSA9ICAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICBib2FyZC5wdXNoKHtoYXNTaGlwOiBmYWxzZSwgbG9jYXRpb246IHVuZGVmaW5lZCwgaXNIaXQ6IGZhbHNlfSk7XG4gIH1cblxuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChwb2ludCwgYXhpcywgbGVuZ3RoKSB7XG4gICAgY29uc3Qgc2hpcFBvc2l0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBbXTtcbiAgICAgIHBvc2l0aW9uLnB1c2goe25hbWU6IHBvaW50LCBpc0hpdDogZmFsc2V9KVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgcG9zaXRpb24ucHVzaCh7bmFtZTogKHBvaW50ICsgaSksIGlzSGl0OiBmYWxzZX0pXG4gICAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgcG9zaXRpb24ucHVzaCh7bmFtZTogKHBvaW50ICsgaSAqIDEwKSwgaXNIaXQ6IGZhbHNlfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKGxlbmd0aCwgc2hpcFBvc2l0aW9uKTtcbiAgICBzaGlwcy5wdXNoKG5ld1NoaXApO1xuXG4gICAgYm9hcmRbcG9pbnRdLmhhc1NoaXAgPSB0cnVlO1xuICAgIGJvYXJkW3BvaW50XS5sb2NhdGlvbiA9IHNoaXBzLmxlbmd0aCAtIDE7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgICAgICBib2FyZFtwb2ludCArIGldLmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICBib2FyZFtwb2ludCArIGldLmxvY2F0aW9uID0gc2hpcHMubGVuZ3RoIC0gMTtcbiAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ3knKSB7XG4gICAgICAgIGJvYXJkW3BvaW50ICsgaSAqIDEwXS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgYm9hcmRbcG9pbnQgKyBpICogMTBdLmxvY2F0aW9uID0gc2hpcHMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHJlY2lldmVBdHRhY2sobnVtKSB7XG4gICAgaWYgKGJvYXJkW251bV0uaGFzU2hpcCA9PT0gdHJ1ZSAmJiBib2FyZFtudW1dLmlzSGl0ID09PSBmYWxzZSkge1xuICAgICAgc2hpcHNbYm9hcmRbbnVtXS5sb2NhdGlvbl0uaGl0KG51bSk7XG4gICAgICBib2FyZFtudW1dLmlzSGl0ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGJvYXJkW251bV0uaGFzU2hpcCA9PT0gdHJ1ZSAmJiBib2FyZFtudW1dLmlzSGl0ID09PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdhbHJlYWR5IGhpdCcpO1xuICAgIH0gZWxzZSBpZiAoYm9hcmRbbnVtXS5oYXNTaGlwID09PSBmYWxzZSAmJiBib2FyZFtudW1dLmlzSGl0ID09PSBmYWxzZSkge1xuICAgICAgYm9hcmRbbnVtXS5pc0hpdCA9IHRydWU7XG4gICAgICBtaXNzZWRTaG90cy5wdXNoKG51bSk7XG4gICAgfSBlbHNlIGlmIChib2FyZFtudW1dLmhhc1NoaXAgPT09IGZhbHNlICYmIGJvYXJkW251bV0uaXNIaXQgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2FscmVhZHkgaGl0Jyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWxsQXJlU3VuaygpIHtcbiAgICBmdW5jdGlvbiBzaGlwSXNIaXQoZW50cnkpIHtcbiAgICAgIHJldHVybiAoZW50cnkuaGFzU2hpcCA9PT0gdHJ1ZSA9PT0gZW50cnkuaXNIaXQpO1xuICAgIH1cbiAgICByZXR1cm4gYm9hcmQuZXZlcnkoc2hpcElzSGl0KTtcbiAgfVxuXG5cbiAgcmV0dXJuIHtib2FyZCwgc2hpcHMsIHBsYWNlU2hpcCwgcmVjaWV2ZUF0dGFjaywgbWlzc2VkU2hvdHMsIGFsbEFyZVN1bmt9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=