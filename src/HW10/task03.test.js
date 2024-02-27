import { isPhoneNumber } from "./task03.js";

describe("Task03", () => {
    it.each([
        ["+7 (812) 413-42-42", true],
        ["8 800 413-42-42", true],
        ["+49(123)5430909", true],
        ["+49 (123) 543 09-09", false],
        ["8 8001 413-42-42", false],
        ["9 800 413-42-42", false],
        ["8 800 41342-42", false],
        ["8 800 413-42-421", false]
    ])("given %p -> expects %p", (string, result) => {
        jest.spyOn(window, "prompt").mockReturnValueOnce(string);
        expect(isPhoneNumber()).toBe(result);
    })
})