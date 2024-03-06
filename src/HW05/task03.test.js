import showMaxAndMin from "./task03";

describe("console checks", () => {
  const logSpy = jest.spyOn(console, "log");

  function randomNumricArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * size));
  }

  it("console contains max and min values", () => {
    showMaxAndMin([1, 2, 3, 4, 5, 6]);
    expect(logSpy).toHaveBeenCalledWith(1, 6);
  });

  it("console contains max and min values (random values)", () => {
    const array = randomNumricArray(40);
    showMaxAndMin(array);
    expect(logSpy).toHaveBeenCalledWith(Math.min(...array), Math.max(...array));
  });
});
