import { isDate } from "./task01.js";

describe("Task01", () => {
    it("20.10.2015 is date", () => {
        expect(isDate('20.10.2015')).toBe(true);
    })
    
    it("10/20/2015 is date", () => {
        expect(isDate('10/20/2015')).toBe(true);
    })
    
    it("2015-10-20 is date", () => {
        expect(isDate('2015-10-20')).toBe(true);
    })
    
    it("20.10.0 is not date", () => {
        expect(isDate('20.10.0')).toBe(false);
    })
    
    it("16/25/2015 is not date", () => {
        expect(isDate('16/25/2015')).toBe(false);
    })
    
    it("20151-00-00 is not date", () => {
        expect(isDate('20151-10-20')).toBe(false);
    })
})