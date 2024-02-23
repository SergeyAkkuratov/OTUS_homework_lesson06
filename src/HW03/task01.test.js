import { sumFromTo } from "./task01";

describe("console checks", ()=>{
    const logSpy = jest.spyOn(console, 'log');

    it("console should show sum all numbers from 50 to 100", () => {
        sumFromTo(50, 100);
        expect(logSpy).toHaveBeenCalledWith(3825);
    })
})