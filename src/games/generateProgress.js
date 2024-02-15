const generateArithmeticProgression = (progressionLength, firstElement, difference) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstElement + i * difference);
  }
  return progression;
};

export default generateArithmeticProgression;
