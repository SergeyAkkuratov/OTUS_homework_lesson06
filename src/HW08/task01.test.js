import getDayName from "./task01";

describe("Task01", () => {
  it("26.02.2024 should return Monday", () => {
    expect(getDayName("26.02.2024")).toBe("Monday");
  });
});
