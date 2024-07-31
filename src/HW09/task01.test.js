import isRight from "./task01";

describe("Task01 with prompt", () => {
  it.each([
    ["5 3 4", true],
    ["3 5 4", true],
    ["3 4 5", true],
    ["2 2 4", false],
    ["4 2 2", false],
    ["2 4 2", false],
    ["2 2 2", false],
  ])("given %p -> expects %p", (values, result) => {
    jest.spyOn(window, "prompt").mockReturnValueOnce(values);
    expect(isRight()).toBe(result);
  });
});
