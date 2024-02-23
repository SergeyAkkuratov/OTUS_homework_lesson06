import { isCircleInSquare } from "./task03.js";

describe("console checks", ()=>{
    it("circle should fit in square", () => {
        expect(isCircleInSquare(78, 100)).toBe(true);
    })

    it("circle shouldn't fit in square", () => {
        expect(isCircleInSquare(80, 100)).toBe(false);
    })
})