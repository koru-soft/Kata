import { bruteForceTwoSum } from "./index";

describe("配列の要素のどれかを2つ足すと、和が指定した数字になるような配列のインデックスの組み合わせをreturnする", () => {
  it("正しく動くパターン", () => {
    // Arrange
    const data = [1, 3, 5];
    const expected = [0, 2];

    // Act
    const result = bruteForceTwoSum(data, 6);

    // Assert
    expect(result).toEqual(expected);
  });
  it("失敗するパターン", () => {
    // Arrange
    const data = [1, 3, 5];
    const expected: [] = [];

    // Act
    const result = bruteForceTwoSum(data, 7);

    // Assert
    expect(result).toEqual(expected);
  });
  it("配列の要素が多いパターン。[4, 5]である9,11も解答になりうるが、先にtargetの数字に到達したindexを返している", () => {
    // Arrange
    const data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const expected = [0, 9];

    // Act
    const result = bruteForceTwoSum(data, 20);

    // Assert
    expect(result).toEqual(expected);
  });
});
