import { remainder } from "./index";

describe("引数を比較し、大きい引数を小さい引数で割った余りを返す。0では割れないので、NaNを返す", () => {
  it("正しく動くパターン", () => {
    // Arrange
    const data1 = 17;
    const data2 = 5;
    const expected = 2;

    // Act
    const result = remainder(data1, data2);

    // Assert
    expect(result).toEqual(expected);
  });
  it("0で割れないためNaNが返るパターン", () => {
    // Arrange
    const data1 = 17;
    const data2 = 0;
    const expected = NaN;

    // Act
    const result = remainder(data1, data2);

    // Assert
    expect(result).toEqual(expected);
  });
});
