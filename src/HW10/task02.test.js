import { isEmail } from "./task02.js";

describe("Task02", () => {
    it.each([
        ["test@mail.com", true],
        ["_.dsa@m.ru", true],
        ["asd123_dsadas_213123.asdasd@dasdasd.asfdas", true],
        ["asdasdasdasd", false],
        ["asdasdasd@asdasdasd", false],
        ["asdasdasd.asdasdas@sadas.111", false]
    ])("given %p -> expects %p", (string, result) => {
        jest.spyOn(window, "prompt").mockReturnValueOnce(string);
        expect(isEmail()).toBe(result);
    })
})