// 1 vazifa
// function son(n) {
//   const toqSon = [];
//   let toq = 1;

//   for (let i = 0; i < n; i++) {
//     toqSon.push(toq);
//     toq += 2;
//   }

//   return toqSon;
// }
// console.log(son(5));

// 2 vazifa
// let arr = [4, 5, 7, 8, 6, 9];
// function kamayish(arr) {
//   return arr.filter((x, index) => index % 2 === 0).reverse();
// }

// console.log(kamayish(arr));

// 3 vazifa

// 4 vazifa

// let arr = [1, 6, 9, 5, 8, 10, 15];
// function rangeSum(arr, K, L) {
//   let sum = 0;
//   for (let i = K; i <= L; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(rangeSum(arr, 2, 5));

// 7 vazifa

function sonlar(arr) {
  let lastElement = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = lastElement;
  return arr;
}

console.log(sonlar([1, 5, 8, 9, 10]));
