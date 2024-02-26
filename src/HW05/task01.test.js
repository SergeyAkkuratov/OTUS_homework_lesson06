import { sum } from "./task01";

describe("console checks", ()=>{
    const logSpy = jest.spyOn(console, 'log');

    it("console should contains sum of elements", () => {
        sum([1,2,3,4,5])
        expect(logSpy).toHaveBeenCalledWith(15);
    })
})