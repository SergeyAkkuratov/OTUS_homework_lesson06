import isWord from "./task02";

describe("Task02", () => {
  it("word === true", () => {
    expect(isWord("word")).toBe(true);
  });
  it("Hello, word === false", () => {
    expect(isWord("Hello, word")).toBe(false);
  });
  it("_1234dasc21fdswaf === true", () => {
    expect(isWord("_1234dasc21fdswaf")).toBe(true);
  });

  it("'  Hello ' === true", () => {
    expect(isWord("  Hello ")).toBe(true);
  });
});
