const generateArithmeticProgression = (n, a1, difference) => {
  const progression = [];
  for (let i = 0; i < n; i += 1) {
    progression.push(a1 + i * difference);
  }
  return progression;
};

export default generateArithmeticProgression;
