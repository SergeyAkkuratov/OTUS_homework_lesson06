export function showSecondsFromStartOfDay() {
    let date = new Date();
    let seconds = date.getSeconds() + date.getMinutes()*60 + date.getHours()*3600;
    console.log(seconds)
}