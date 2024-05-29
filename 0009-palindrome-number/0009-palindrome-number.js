/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
      if (x < 0) {
    return false;
  }

  /* 길이가 짝수 */
  if (String(x).length % 2 === 0) {
    const half = String(x).length / 2;

    const left = String(x).substring(0, half);
    const right = [...String(x).substring(half)].reverse().join("");

    if (left === right) {
      return true;
    }

    return false;
    /* 길이가 홀수 */
  } else {
    const half = Math.ceil(String(x).length / 2);

    const left = String(x).substring(0, half - 1);
    const right = [...String(x).substring(half)].reverse().join("");

    if (left === right) {
      return true;
    }

    return false;
  }
};