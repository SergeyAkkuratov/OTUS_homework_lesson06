import { user, setAge, cloneObjectWithRole, getVarsFromObject } from "./scrpit";

describe("All tasks in one file", () => {
  it("Task 01: should contains age = 18", () => {
    jest.spyOn(window, "prompt").mockReturnValueOnce(18);
    setAge();
    expect(user.age).toBe(18);
  });

  it("Task 02: should create new object with adding field role = admin", () => {
    const admin = cloneObjectWithRole("admin");

    expect(admin).not.toBe(null);
    expect(admin.name).toBe(user.name);
    expect(admin.role).toBe("admin");
  });

  it("Task 03: should create ", () => {
    const admin = cloneObjectWithRole("admin");
    const { name, role, age } = getVarsFromObject(admin);

    expect(name).not.toBe(admin.name);
    expect(role).not.toBe(admin.role);
    expect(age).not.toBe(admin.age);
  });
});
