import { Main } from "./";

describe("1か0を受け取り、１を受け取った場合にビー玉を置く回数を求める関数", () => {
  it("1が２回の場合", () => {
    // Arrange
    const data = "101";
    const expected = 2;

    // Act
    const result = Main(data);

    // Assert
    expect(result).toEqual(expected);
  });
});
