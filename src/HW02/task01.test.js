import max from "./task01";

describe("console checks", () => {
  const logSpy = jest.spyOn(console, "log");

  it("console should show first number", () => {
    max(5, 2);
    expect(logSpy).toHaveBeenCalledWith(5);
  });

  it("console should show second number", () => {
    max(5, 10);
    expect(logSpy).toHaveBeenCalledWith(10);
  });
});
