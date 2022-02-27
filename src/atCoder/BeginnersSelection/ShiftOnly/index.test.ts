import { Main } from "./";

describe("N 個の正の整数 A1 ,...,A Nが全て偶数である時、書かれている整数すべてを，2 で割ったものに置き換える。この操作の最大数を求める関数", () => {
  it("N=4, 5 6 8 10を与えた場合", () => {
    // Arrange
    const data = ["4", "5 6 8 10"];
    const expected = 0;

    // Act
    const result = Main(data);

    // Assert
    expect(result).toEqual(expected);
  });
});
