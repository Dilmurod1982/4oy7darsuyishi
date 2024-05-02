// 1 vazifa
function getInitialOdds(n) {
    const odds = [];
    let currentOdd = 1;

    for (let i = 0; i < n; i++) {
        odds.push(currentOdd);
        currentOdd += 2;
    }

    return odds;
}

console.log(getInitialOdds(20)); 

