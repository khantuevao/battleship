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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMkI7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUIsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0EsTUFBTTtBQUNOLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQgfTtcblxuZnVuY3Rpb24gU2hpcChsZW4pIHtcbiAgY29uc3QgbGVuZ3RoID0gbGVuO1xuXG4gIGNvbnN0IHBvc2l0aW9uID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBwb3NpdGlvbltpXSA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gaGl0KG51bSkge1xuICAgIHBvc2l0aW9uW251bV0gPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBwb3NpdGlvbi5mb3JFYWNoKChwb3MpID0+IHtcbiAgICAgIGlmIChwb3MgPT09IHRydWUpIGhpdHMrKztcbiAgICB9KTtcbiAgICByZXR1cm4gaGl0cyA9PT0gbGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHsgcG9zaXRpb24sIGhpdCwgaXNTdW5rIH07XG59XG5cbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gW107XG4gIGZvciAobGV0IGkgPSAgMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgZ2FtZUJvYXJkLnB1c2goe2hhc1NoaXA6IGZhbHNlLCBpc0hpdDogZmFsc2V9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChwb2ludCwgYXhpcywgbGVuZ3RoKSB7XG4gICAgZ2FtZUJvYXJkW3BvaW50XS5oYXNTaGlwID0gdHJ1ZTtcbiAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGdhbWVCb2FyZFtwb2ludCArIGldLmhhc1NoaXAgPSB0cnVlO1xuICAgICAgfSBcbiAgICB9IGVsc2UgaWYgKGF4aXMgPT09ICd5Jykge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBnYW1lQm9hcmRbcG9pbnQgKyAoaSAqIDEwKV0uaGFzU2hpcCA9IHRydWU7XG4gICAgICB9IFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2lldmVBdHRhY2sobnVtKSB7XG4gICAgZ2FtZUJvYXJkW251bV0uaXNIaXQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsQXJlU3VuaygpIHtcbiAgICBmdW5jdGlvbiBzaGlwSXNIaXQoZW50cnkpIHtcbiAgICAgIHJldHVybiAoZW50cnkuaGFzU2hpcCA9PT0gdHJ1ZSA9PT0gZW50cnkuaXNIaXQpO1xuICAgIH1cbiAgICByZXR1cm4gZ2FtZUJvYXJkLmV2ZXJ5KHNoaXBJc0hpdCk7XG4gIH1cblxuICByZXR1cm4ge2dhbWVCb2FyZCwgcGxhY2VTaGlwLCByZWNpZXZlQXR0YWNrLCBhbGxBcmVTdW5rfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9