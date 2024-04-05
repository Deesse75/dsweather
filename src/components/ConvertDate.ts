
export default function convertDate(value: number, ind: number): string {
  const newDate = new Date(value * ind);
  const stringDay = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  const stringMonth = [
    "Jan",
    "Fev",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Aout",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const dayName = stringDay[day];
  const monthName = stringMonth[month - 1];
  const dailyDate = `${dayName} ${day} ${monthName} ${year}`;
  const syncHour = newDate.getHours();
  const syncMin = newDate.getMinutes();
  const syncMinutes = syncMin < 10 ? `0${syncMin}` : syncMin;
  const syncDate = `${dailyDate} ${syncHour}:${syncMinutes}`;
  if (ind === 1) return dailyDate;
  return syncDate;
}
