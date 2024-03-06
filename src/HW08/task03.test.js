import { howIsYounger, getDate } from "./task03";

describe("Task03", () => {
  const olderDate = "15.07.1989";
  const youngerDate = "28.11.1989";

  it("test getDate function", () => {
    const testDate = new Date("2015-04-17T00:00:00+0300");
    expect(getDate("17.04.2015")).toEqual(testDate);
  });

  it("first date is lower", () => {
    expect(howIsYounger(youngerDate, olderDate)).toBe("FIRST");
  });

  it("second date is lower", () => {
    expect(howIsYounger(olderDate, youngerDate)).toBe("SECOND");
  });

  it("dates is the same", () => {
    expect(howIsYounger(youngerDate, youngerDate)).toBe("SAME");
  });
});
