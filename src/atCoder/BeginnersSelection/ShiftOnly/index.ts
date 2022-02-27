const Main = (input: string | string[]) => {
  if (typeof input === "string") {
    input = input?.split("\n");
  }
  const tmp = input[1].split(" ");
  let targetArr = tmp.map(element => Number(element));
  let counter = 0;

  const div = (arg: number) => {
    return arg % 2 === 0;
  };

  const recursiveCalc = (arg: number[]) => {
    if (targetArr.every(div)) {
      targetArr = targetArr.map(element => element / 2);
      counter++;
      recursiveCalc(targetArr);
    } else {
      return counter;
    }
  };

  recursiveCalc(targetArr);
  return targetArr;
  // console.log(counter);
};

//* この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

export { Main };
