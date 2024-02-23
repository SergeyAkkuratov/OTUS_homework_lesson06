import { sumOfDigits } from "./task03";

describe("console checks", () => {
    it("console contains sum of digits", () => {
        const logSpy = jest.spyOn(console, 'log');
        
        sumOfDigits(123);
        
        expect(logSpy).toHaveBeenCalledWith(6);
    })
})