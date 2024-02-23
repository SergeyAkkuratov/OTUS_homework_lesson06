import { showMonth } from "./task02";

describe("console checks", () => {
    const logSpy = jest.spyOn(console, 'log');

    it.each([
        {index: 1, month: "январь"},
        {index: 2, month: "февраль"},
        {index: 3, month: "март"},
        {index: 4, month: "апрель"},
        {index: 5, month: "май"},
        {index: 6, month: "июнь"},
        {index: 7, month: "июль"},
        {index: 8, month: "август"},
        {index: 9, month: "сентябрь"},
        {index: 10, month: "октябрь"},
        {index: 11, month: "ноябрь"},
        {index: 12, month: "декабрь"},
        {index: "error", month: "Нет месяца с индексом: error"}
    ])("given %p -> expects %p", ({index, month}) => {
        showMonth(index);        
        expect(logSpy).toHaveBeenCalledWith(month);
    })
})