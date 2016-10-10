var breakChocolate = function(n, m) {
  return (n === 0 || m === 0) ? 0 : (m - 1) + m * (n - 1);
};
