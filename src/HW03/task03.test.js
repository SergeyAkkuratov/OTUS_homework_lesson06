import { getAvarage } from "./task03.js";

describe("console checks", () => {
    const logSpy = jest.spyOn(console, 'log');

    it("console contains avarage from 1 to 38", () => {
        getAvarage(38);        
        
        expect(logSpy).toHaveBeenCalledWith((1+38)/2);
    })
})