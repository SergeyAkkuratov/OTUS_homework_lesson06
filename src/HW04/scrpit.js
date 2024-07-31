export const user = {
  name: "John",
};

export function setAge() {
  user.age = Number(prompt("Введите возраст:"));
}

export function cloneObjectWithRole(name) {
  return { ...user, role: name };
}

export function getVarsFromObject(obj) {
  const { name, role, age } = obj;
  return [name, role, age];
}

module.exports = {
  user,
  setAge,
  cloneObjectWithRole,
  getVarsFromObject,
};
