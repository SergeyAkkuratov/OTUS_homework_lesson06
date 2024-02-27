import { isPhoneNumber } from "./task03.js";

describe("Task03", () => {
    it("+7 (812) 413-42-42 is phone number", () => {
        expect(isPhoneNumber('+7 (812) 413-42-42')).toBe(true);
    })
    
    it("8 800 413-42-42 is phone number", () => {
        expect(isPhoneNumber('8 800 413-42-42')).toBe(true);
    })
    
    it("+49(123)5430909 is phone number", () => {
        expect(isPhoneNumber('+49(123)5430909')).toBe(true);
    })
    
    it("+49 (123) 543 09-09 is not phone number", () => {
        expect(isPhoneNumber('+49 (123) 543 09-09')).toBe(false);
    })
    
    it("8 8001 413-42-42 is not phone number", () => {
        expect(isPhoneNumber('8 8001 413-42-42')).toBe(false);
    })
    
    it("9 800 413-42-42 is not phone number", () => {
        expect(isPhoneNumber('9 800 413-42-42')).toBe(false);
    })
    it("8 800 41342-42 is not phone number", () => {
        expect(isPhoneNumber('9 800 413-42-42')).toBe(false);
    })
    
    it("8 800 413-42-421 is not phone number", () => {
        expect(isPhoneNumber('9 800 413-42-42')).toBe(false);
    })
})