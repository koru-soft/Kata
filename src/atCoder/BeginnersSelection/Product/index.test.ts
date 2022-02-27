import { Main } from "./";

describe("積が奇数ならOddと、偶数ならEvenと出力する関数", () => {
  it("積が奇数の場合", () => {
    // Arrange
    const data = "1 21";
    const expected = "Odd";

    // Act
    const result = Main(data);

    // Assert
    expect(result).toEqual(expected);
  });
  it("積が偶数の場合", () => {
    // Arrange
    const data = "1 22";
    const expected = "Even";

    // Act
    const result = Main(data);

    // Assert
    expect(result).toEqual(expected);
  });
});
