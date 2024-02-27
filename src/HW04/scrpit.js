export let user = {
    name: 'John'
}

export function setAge() {
    user.age = Number(prompt("Введите возраст:"));
}

export function cloneObjectWithRole(name) {
    return {...user, role: name};
}

export function getVarsFromObject(obj) {
    let {name, role} = obj;
    return [name, role];
}

module.exports = {
    user, setAge, cloneObjectWithRole, getVarsFromObject
}

