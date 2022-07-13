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
