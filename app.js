// 1 vazifa
function son(n) {
  const toqSon = [];
  let toq = 1;

  for (let i = 0; i < n; i++) {
    toqSon.push(toq);
    toq += 2;
  }

  return toqSon;
}

console.log(son(5));
