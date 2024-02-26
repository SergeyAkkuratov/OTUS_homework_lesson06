import { showSecondsFromStartOfDay } from "./task02";

describe("Task02", () => {
    it("console contains seconds from beginning of day", () => {
        const mockDateObject = new Date("2021-02-26T20:42:16.652Z");
        const spy = jest.spyOn(global, "Date").mockImplementation(() => mockDateObject);
        const logSpy = jest.spyOn(console, 'log');

        let seconds = mockDateObject.getSeconds() + 60 * (mockDateObject.getMinutes() + 60 * mockDateObject.getHours());

        showSecondsFromStartOfDay();

        expect(logSpy).toHaveBeenCalledWith(seconds);
    })
})