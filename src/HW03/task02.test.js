import { showMultiplyTable } from "./task02";

describe("console checks", () => {
    const logSpy = jest.spyOn(console, 'log');

    it("console contains multiply table for 7", () => {
        showMultiplyTable(7);        
        let result = "7 * 1 = 7\n";
        result+="7 * 2 = 14\n";
        result+="7 * 3 = 21\n";
        result+="7 * 4 = 28\n";
        result+="7 * 5 = 35\n";
        result+="7 * 6 = 42\n";
        result+="7 * 7 = 49\n";
        result+="7 * 8 = 56\n";
        result+="7 * 9 = 63\n";
        
        expect(logSpy).toHaveBeenCalledWith(result);
    })
})