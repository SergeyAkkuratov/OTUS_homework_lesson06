import { cloneArray } from "./task02";

describe("console checks", ()=>{
    it("should return array with values multiply 2", () => {
        let result = cloneArray([1, 2, 3, 4]);
        expect(result[0]).toBe(2);
        expect(result[1]).toBe(4);
        expect(result[2]).toBe(6);
        expect(result[3]).toBe(8);
    })
})