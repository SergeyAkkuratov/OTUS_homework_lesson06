const getComposedRegex = (...regexes) => new RegExp(regexes.map(regex => regex.source).join("|"));

export function isDate(str){
    let regexpSource = [
        /^(3[01]|[12][0-9]|0?[1-9])(\/|-|\.)(0?[1-9]|1[012])\2(\d{2})?\d{2}$/,
        /^(1[0-2]|0?[1-9])(\/|-|\.)(3[01]|[12][0-9]|0?[1-9])\2(\d{2})?\d{2}$/,
        /^(\d{2})?\d{2}(\/|-|\.)(1[0-2]|0?[1-9])\2(3[01]|[12][0-9]|0?[1-9])$/,
        /^(\d{2})?\d{2}(\/|-|\.)(3[01]|[12][0-9]|0?[1-9])\2(1[0-2]|0?[1-9])$/
    ];

    return regexpSource.reduce((result, value) => {return result || value.test(str)}, false);
}