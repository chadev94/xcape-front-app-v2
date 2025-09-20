export default function makeDifficultyIcon(difficultyValue: number) {
  const array: boolean[] = [];

  difficultyValue = difficultyValue > 5 ? 5 : difficultyValue;

  for (let i = 0; i < difficultyValue; i++) {
    array[i] = true;
  }

  for (let i = difficultyValue; i < 5; i++) {
    array[i] = false;
  }

  return array;
}
