import { diff } from "./task01";

describe("Task01", () => {
    it("diff(10,6) == 4", () => {
        expect(diff(10, 6)).toBe(4);
    })
    it("diff(6,10) == 4", () => {
        expect(diff(6, 10)).toBe(4);
    })
    it("diff(6,6) == 0", () => {
        expect(diff(6, 6)).toBe(0);
    })
})