import bubbleSort from "./index";

describe("配列の要素を昇順に並べ替える", () => {
  it("正しく動くパターン", () => {
    // Arrange
    const data = [7, 5, 10, 3, 4];
    const expected = [3, 4, 5, 7, 10];

    // Act
    const result = bubbleSort(data);

    // Assert
    expect(result).toEqual(expected);
  });
});
