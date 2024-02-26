import { user, setAge, cloneObjectWithRole, getVarsFromObject } from "./scrpit.js";

describe("All tasks in one file", () => {   
    it("Task 01: should contains age = 18", () => {
        setAge(18);
        expect(user.age).toBe(18);
    })

    it("Task 02: should create new object with adding field role = admin", () => {
        let admin = cloneObjectWithRole('admin');

        expect(admin).not.toBe(null);
        expect(admin.name).toBe(user.name);
        expect(admin.role).toBe('admin');
    })

    it("Task 03: should create ", () => {
        let admin = cloneObjectWithRole('admin');
        let {name, role} = getVarsFromObject(admin);

        expect(name).not.toBe(admin.name);
        expect(role).not.toBe(admin.role);
    })
})