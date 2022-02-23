module.exports = function reverse (n) {
  let a = Array.from(Math.abs(n).toString());
  return a.reverse().join('');
}
