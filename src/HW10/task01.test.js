import isDate from "./task01";

describe("Task01", () => {
  it.each([
    ["20.10.2015", true],
    ["10/20/2015", true],
    ["2015-10-20", true],
    ["20.10.0", false],
    ["16/25/2015", false],
    ["20151-00-00", false],
  ])("given %p -> expects %p", (string, result) => {
    jest.spyOn(window, "prompt").mockReturnValueOnce(string);
    expect(isDate()).toBe(result);
  });
});
