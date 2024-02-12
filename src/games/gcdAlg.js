const gcdAlg = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcdAlg(b, a % b);
};

export default gcdAlg;
