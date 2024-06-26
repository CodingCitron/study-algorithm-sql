const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ");
let truth = input.shift().split(" ").map(Number);
truth.shift();

let parties = input.map((str) => {
  const arr = [...str.split(" ")].map(Number);
  arr.shift();
  return arr;
});

const num = [...parties];

while (truth.length) {
  const t = [...truth];

  const newYet = []; // 진실을 모르는 파티
  const newT = []; // 진실을 아는 파티

  truth = []; // 초기화 무한루프 돌지 않게

  parties.forEach((party) => {
    // 진실을 아는 파티
    const arr = party.filter((n) => t.includes(n));

    // 진실을 아는 파티
    if (arr.length > 0) {
      newT.push(party.filter((n) => !t.includes(n)));

      // 모르는 파티 추가
    } else {
      newYet.push(party);
    }
  });

  // 모르는 파티
  parties = [...newYet];
  // 추가된 진실을 아는 사람
  truth = newT.flat();
}

console.log(parties.length);
