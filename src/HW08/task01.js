const dayNames = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"];

export function getDayName(dateStr) {
    let [day, month, year] = dateStr.split(".");
    let date = new Date(year, Number(month)-1, day);
    return dayNames[date.getDay()];
}