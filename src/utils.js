// src/utils.js
export function pointsForWord(word) {
  let points = 0;
  for (const char of word) {
    points += /[aeiou]/i.test(char) ? 1 : 2; // 1 for vowels, 2 for consonants
  }
  return points;
}
