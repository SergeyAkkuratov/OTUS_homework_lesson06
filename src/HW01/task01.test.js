import { sumAndMult } from "./task01";

describe("console checks", () => {
    it("console contains sum and multiply of a and b", () => {
        const logSpy = jest.spyOn(console, 'log');
        
        sumAndMult(2,3);
        
        expect(logSpy).toHaveBeenCalledWith(5, 6);
    })
})