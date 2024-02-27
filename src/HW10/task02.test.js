import { isEmail } from "./task02.js";

describe("Task02", () => {
    it("test@mail.com is email", () => {
        expect(isEmail('test@mail.com')).toBe(true);
    })
    
    it("_.dsa@m.ru is email", () => {
        expect(isEmail('_.dsa@m.ru')).toBe(true);
    })
    
    it("asd123_dsadas_213123.asdasd@dasdasd.asfdas is email", () => {
        expect(isEmail('asd123_dsadas_213123.asdasd@dasdasd.asfdas')).toBe(true);
    })
    
    it("asdasdasdasd is not email", () => {
        expect(isEmail('asdasdasdasd')).toBe(false);
    })
    
    it("asdasdasd@asdasdasd is not email", () => {
        expect(isEmail('asdasdasd@asdasdasd')).toBe(false);
    })
    
    it("asdasdasd.asdasdas@sadas.111 is not email", () => {
        expect(isEmail('asdasdasd.asdasdas@sadas.111')).toBe(false);
    })
})