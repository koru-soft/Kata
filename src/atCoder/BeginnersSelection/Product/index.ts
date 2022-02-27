/**
 * @returns {string} "Odd" or "Even"
 * ex) [1, 21] => Odd
 * @param input
 */
const Main = (input: string) => {
  const targetArr = input.split(" ");
  const primary = parseInt(targetArr[0], 10);
  const secondary = parseInt(targetArr[1], 10);
  const target = primary * secondary;
  return target % 2 === 0 ? "Even" : "Odd";
};

export { Main };
