import getRoots from "./task03";

describe("Task03", () => {
  it("get roots if a,b,c == 1,12,36", () => {
    const logSpy = jest.spyOn(console, "log");
    getRoots(1, 12, 36);

    expect(logSpy).toHaveBeenCalledWith(-6, undefined);
  });

  it("get roots if a,b,c == 1,20,36", () => {
    const logSpy = jest.spyOn(console, "log");
    getRoots(1, 20, 36);

    expect(logSpy).toHaveBeenCalledWith(-2, -18);
  });

  it("get roots if a,b,c == 0,12,36", () => {
    const logSpy = jest.spyOn(console, "log");
    getRoots(0, 12, 36);

    expect(logSpy).toHaveBeenCalledWith(undefined, undefined);
  });

  it("get roots if a,b,c == 12,1,36", () => {
    const logSpy = jest.spyOn(console, "log");
    getRoots(12, 1, 36);

    expect(logSpy).toHaveBeenCalledWith(undefined, undefined);
  });
});
