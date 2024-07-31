const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wendsday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function getDayName(dateStr) {
  const [day, month, year] = dateStr.split(".");
  const date = new Date(year, Number(month) - 1, day);
  return dayNames[date.getDay()];
}
