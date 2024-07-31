import commonLength from "./task02";

describe("console checks", () => {
  it("console contains sum of lengths str1 and str2", () => {
    const logSpy = jest.spyOn(console, "log");

    commonLength("Hello", " world!");

    expect(logSpy).toHaveBeenCalledWith(12);
  });
});
