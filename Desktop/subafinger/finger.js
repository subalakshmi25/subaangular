let n = 11;

function count(n) {
  let r = n % 8;
  if (r == 1)
    return r;
  if (r == 5)
    return r;
  if (r == 0 || r == 2)
    return 2;
  if (r == 3 || r == 7)
    return 3;
  if (r == 4 || r == 6)
    return 4;
  return n;
}

console.log("the given number is on your finger", count(n));
