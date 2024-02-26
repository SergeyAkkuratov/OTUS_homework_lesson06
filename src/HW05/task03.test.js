import { showMaxAndMin } from "./task03.js";

describe("console checks", ()=>{
    const logSpy = jest.spyOn(console, 'log');

    it("console contains max and min values", () => {
        showMaxAndMin([1, 2, 3, 4, 5, 6]);
        expect(logSpy).toHaveBeenCalledWith(1, 6);
    })
})