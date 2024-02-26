import { isRight } from "./task01";

describe("Task01", () => {
    it("triangle is right (a is hypotenuse)", () => {
        expect(isRight(5,3,4)).toBe(true);
    })
    
    it("triangle is right (b is hypotenuse)", () => {
        expect(isRight(3,5,4)).toBe(true);
    })
    
    it("triangle is right (c is hypotenuse)", () => {
        expect(isRight(3,4,5)).toBe(true);
    })
    
    it("triangle is not right", () => {
        expect(isRight(2,2,4)).toBe(false);
    })
    it("triangle is not right", () => {
        expect(isRight(4,2,2)).toBe(false);
    })
    it("triangle is not right", () => {
        expect(isRight(2,4,2)).toBe(false);
    })

    it("triangle is not right", () => {
        expect(isRight(2,2,2)).toBe(false);
    })
})