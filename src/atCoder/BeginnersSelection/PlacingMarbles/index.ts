const Main = (input: string) => {
  const targetArr = input.split("");
  let counter = 0;

  if (targetArr[0] === "1") { counter++; }
  if (targetArr[1] === "1") { counter++; }
  if (targetArr[2] === "1") { counter++; }

  // console.log(counter);
  return counter;
};

//* この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export { Main };
