/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function Ship(len) {
  const length = [];
  length.length = len;
  for (let i = 0; i < length.length; i++) {
    length[i] = "";
  }

  function hit(num) {
    length[num - 1] = "hit";
  }

  function isSunk() {
    function isHit(el) {
      return el === "hit";
    }
    return length.every(isHit);
  }

  return { length, hit, isSunk };
}

const grs = "new";

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU2hpcChsZW4pIHtcbiAgY29uc3QgbGVuZ3RoID0gW107XG4gIGxlbmd0aC5sZW5ndGggPSBsZW47XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoLmxlbmd0aDsgaSsrKSB7XG4gICAgbGVuZ3RoW2ldID0gXCJcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpdChudW0pIHtcbiAgICBsZW5ndGhbbnVtIC0gMV0gPSBcImhpdFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIGZ1bmN0aW9uIGlzSGl0KGVsKSB7XG4gICAgICByZXR1cm4gZWwgPT09IFwiaGl0XCI7XG4gICAgfVxuICAgIHJldHVybiBsZW5ndGguZXZlcnkoaXNIaXQpO1xuICB9XG5cbiAgcmV0dXJuIHsgbGVuZ3RoLCBoaXQsIGlzU3VuayB9O1xufVxuXG5jb25zdCBncnMgPSBcIm5ld1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9