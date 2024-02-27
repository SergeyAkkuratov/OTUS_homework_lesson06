import { sumOfDigits } from "./task03";

describe("console checks", () => {
    it("console contains sum of digits", () => {
        const logSpy = jest.spyOn(console, 'log');
        jest.spyOn(window, "prompt").mockReturnValueOnce(123);
        
        sumOfDigits();
        
        expect(logSpy).toHaveBeenCalledWith(6);
    })
})