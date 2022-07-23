export function makeLengthArray(length) {
  const countLength = [];
  const a = length / 10;
  const b = Math.floor(a);
  for (let i = 1; i <= b; i++) {
    countLength.push(i * 10);
  }
  if (a > b) {
    countLength.push(length);
  }

  return countLength;
}
