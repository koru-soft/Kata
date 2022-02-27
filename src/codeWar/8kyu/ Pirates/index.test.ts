import { cannonsReadyPrimary } from "./";

describe("海賊船の乗組員の準備ができているかを確認する関数", () => {
  it("準備ができている場合、nayが含まれずFire!をreturnする", () => {
    // Arrange
    const data = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" };
    const expected = "Fire!";

    // Act
    const result = cannonsReadyPrimary(data);

    // Assert
    expect(result).toEqual(expected);
  });
  it("準備ができていない場合、nayが含まれShiver me timbers!をreturnする", () => {
    // Arrange
    const data = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };
    const expected = "Shiver me timbers!";

    // Act
    const result = cannonsReadyPrimary(data);

    // Assert
    expect(result).toEqual(expected);
  });
});
