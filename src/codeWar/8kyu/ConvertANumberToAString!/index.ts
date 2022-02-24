/*
* We need a function that can transform a number into a string.
  What ways of achieving this do you know?
  ex 123 --> "123"
     999 --> "999"
* */
type numberToStringType = (arg :number) => string;

export const numberToString: numberToStringType = (num) => {
  return String(num);
};

/*
* 別解1
* function numberToString(num) {
  return num.toString();
}
* 別解2
* const numberToString = num => `${num}`;
* */
