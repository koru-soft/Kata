import { numberToString } from "./index";

describe("数値を文字列変換する", () => {
  it("正しく動くパターン", () => {
    // Arrange
    const data = 123;
    const expected = "123";

    // Act
    const result = numberToString(data);

    // Assert
    expect(result).toEqual(expected);
  });
});
