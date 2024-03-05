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

    it("diff(-3,-2) == 1", () => {
        expect(diff(-3, -2)).toBe(1);
    })

    it("diff(-3,2) == 5", () => {
        expect(diff(-3, 2)).toBe(5);
    })
    it("diff(3,-2) == 5", () => {
        expect(diff(3, -2)).toBe(5);
    })
})