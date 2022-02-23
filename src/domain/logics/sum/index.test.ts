import { sumNumber } from "./";

describe("足算をする関数", () => {
  it("ある数字の演算が正しく処理される", () => {
    // Arrange
    const data = 1;
    const expected = 2;

    // Act
    const result = sumNumber(data, data);

    // Assert
    expect(result).toEqual(expected);
  });
});
