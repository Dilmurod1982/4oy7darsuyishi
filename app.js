// 1 vazifa
let A = parseInt(prompt("Son kiriting: "));
A = A * 2;

function toqSon(n) {
  const toq = [];

  for (let i = 0; i < n; i++) {
    if (i != i % 2) {
      toq.push(i);
    }
  }
  return toq;
}

alert(`Siz kiritgan sonda quiydagi toq sonlar mavjud ${toqSon(A)}`);
// let A = parseInt(prompt("Son kiriting: "));

// function getInitialOdds(n) {
//   const odds = [];
//   let currentOdd = 1;

//   for (let i = 0; i < n; i++) {
//     odds.push(currentOdd);
//     currentOdd += 2;
//   }

//   return odds;
// }

// getInitialOdds(A);

// alert(`Siz kiritgan sonda quiydagi toq sonlar mavjud ${getInitialOdds(A)}`);

// // console.log(getInitialOdds(5));
