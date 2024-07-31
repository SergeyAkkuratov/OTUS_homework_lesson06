export default function showSecondsFromStartOfDay() {
  const date = new Date();
  const seconds =
    date.getSeconds() + date.getMinutes() * 60 + date.getHours() * 3600;
  console.log(seconds);
}
