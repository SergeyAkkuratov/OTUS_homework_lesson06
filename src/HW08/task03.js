export function getDate(dateString) {
  const [day, month, year] = dateString.split(".");
  return new Date(year, Number(month) - 1, day);
}

export function howIsYounger(firstDateString, secondDateString) {
  const firstDate = getDate(firstDateString);
  const secondDate = getDate(secondDateString);
  if (firstDate < secondDate) {
    return "SECOND";
  }
  if (secondDate < firstDate) {
    return "FIRST";
  }
  return "SAME";
}

module.exports = { howIsYounger, getDate };
