import pow from "./task03";

describe("Task03", () => {
  it("console contains max and min values", () => {
    expect(pow(2, 10)).toBe(1024);
  });
});
