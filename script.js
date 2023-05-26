// Variables
const inputDay = document.getElementById("day-input");
const outputDay = document.getElementById("day-output");
const dayFailed = document.getElementById("daily-failed");
const dayLabel = document.getElementById("day-label");
//

const inputMonth = document.getElementById("month-input");
const outputMonth = document.getElementById("month-output");
const monthFailed = document.getElementById("monthly-failed");
const monthLabel = document.getElementById("month-label");

//
const inputYear = document.getElementById("year-input");
const outputYear = document.getElementById("year-output");
const yearFailed = document.getElementById("yearly-failed");
const yearLabel = document.getElementById("year-label");

// Function
const handleClick = () => {
  const currentDate = new Date();

  // Day
  if (
    inputDay.value != "" &&
    1 <= Number(inputDay.value) &&
    Number(inputDay.value) < 32
  ) {
    let inputDayResult = Number(currentDate.getDate()) - Number(inputDay.value);
    outputDay.innerHTML = inputDayResult;
  } else {
    inputDay.style.borderColor = "hsl(0, 100%, 67%)";
    dayLabel.style.color = "hsl(0, 100%, 67%)";
    if (inputDay.value == "") {
      dayFailed.innerHTML = "This field is required";
    } else {
      dayFailed.innerHTML = "Must be a valid day";
    }
  }
  // Month
  if (
    inputMonth != "" &&
    1 <= Number(inputMonth.value) &&
    Number(inputMonth.value) < 13
  ) {
    let inputMonthResult = currentDate.getMonth() - Number(inputMonth.value);
    debugger;
    if (inputMonthResult < 0) {
      Math.abs(inputMonthResult);
      debugger;
      outputMonth.innerHTML = Math.abs(inputMonthResult);
    } else {
      debugger;
      outputMonth.innerHTML = inputMonthResult;
    }
  } else {
    inputMonth.style.borderColor = "hsl(0, 100%, 67%)";
    monthLabel.style.color = "hsl(0, 100%, 67%)";
    if (inputMonth.value == "") {
      monthFailed.innerHTML = "This field is required";
    } else {
      monthFailed.innerHTML = "Must be a valid month";
    }
  }

  // Year
  if (inputYear != "" && Number(inputYear.value) <= currentDate.getFullYear()) {
    let inputYearResult = currentDate.getFullYear() - Number(inputYear.value);
    outputYear.innerHTML = inputYearResult;
  } else {
    inputYear.style.borderColor = "hsl(0, 100%, 67%)";
    yearLabel.style.color = "hsl(0, 100%, 67%)";
    if (inputYear.value == "") {
      yearFailed.innerHTML = "This field is required";
    } else {
      yearFailed.innerHTML = "Must be in the past";
    }
  }
};
document.getElementById("submit").addEventListener("click", handleClick);
