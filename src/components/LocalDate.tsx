
const LocalDate = () => {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
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
  const dayName = stringDay[day];
  const monthName = stringMonth[month - 1];
  const localDate = `${dayName} ${day} ${monthName} ${year}`;
  // const localDate = `${day < 10 ? "0" : ""}${day}/${month < 10 ? "0" : ""}${month}/${year}`;


  return <div className="dateBox">{localDate}</div>;
}

export default LocalDate;