function digitize(n) {
  let reversedDigits = n.toString().split('').reverse();
  return reversedDigits.map(x => Number(x));
 }
