import { showMonth } from "./task02";

describe("console checks", () => {
    const logSpy = jest.spyOn(console, 'log');

    it.each([
        [1, "январь"],
        [2, "февраль"],
        [3, "март"],
        [4, "апрель"],
        [5, "май"],
        [6, "июнь"],
        [7, "июль"],
        [8, "август"],
        [9, "сентябрь"],
        [10, "октябрь"],
        [11, "ноябрь"],
        [12, "декабрь"],
        ["error", "Нет месяца с индексом: error"]
    ])("given %p -> expects %p", (index, month) => {
        jest.spyOn(window, "prompt").mockReturnValueOnce(index);
        showMonth();        
        expect(logSpy).toHaveBeenCalledWith(month);
    })
})