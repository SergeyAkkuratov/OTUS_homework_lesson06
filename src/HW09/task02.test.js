import { getSqrAndLength } from "./task02";

describe("Task02", () => {
    it("get square and length of circle with radius 5", () => {
        const logSpy = jest.spyOn(console, 'log');
        getSqrAndLength(5);

        expect(logSpy).toHaveBeenCalledWith(Math.PI*25, Math.PI*2*5);
    })
})