import { max } from "./task01";

describe("console checks", ()=>{
    const logSpy = jest.spyOn(console, 'log');

    it("console should show max of two numbers", () => {
        max(5, 10);
        expect(logSpy).toHaveBeenCalledWith(10);
    })
})