export function howIsYounger(firstDateString, secondDateString) {
    let firstDate = getDate(firstDateString);
    let secondDate = getDate(secondDateString);
    if (firstDate < secondDate) {
        return "SECOND";
    } else if (secondDate < firstDate) {
        return "FIRST";
    } else {
        return "SAME";
    }
}

export function getDate(dateString) {
    let [day, month, year] = dateString.split(".");
    return new Date(year, Number(month)-1, day);
}

module.exports = { howIsYounger, getDate }