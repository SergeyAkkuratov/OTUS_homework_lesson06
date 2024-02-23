import { sumOfDigits } from "./task03";

describe("console checks", () => {
    const logSpy = jest.spyOn(console, 'log');
    const promptSpy = jest.spyOn(global, 'prompt');

    afterEach(() => {
        jest.resetAllMocks();
    });

    it("should call the input", () => {
        sumOfDigits();

        expect(promptSpy).toHaveBeenCalledWith("Введите трёхзначное число:");
    });
    it("console contains sum of digits", () => {
        promptSpy.mockReturnValue(123);

        sumOfDigits();

        expect(logSpy).toHaveBeenCalledWith(6);
    })
})