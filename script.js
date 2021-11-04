
const switchBtn = document.getElementById("twelveHourBtn");

let twelveHourBtn = document.getElementById("twelveHourBtn");
let getTime = document.getElementById("time");
let isTwelveHour = true;
let amPm = " AM";

// ============ Get the time ======================

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  let hours = "12";
  let today = new Date();
  let h = today.getHours();

  if (h > 12) {
    amPm = " PM";
  } else {
    amPm = " AM";
  }

  if (isTwelveHour) {
    hours = "24";
    if (h >= 12) {
      h = h - 12;
    }
  } else {
    hours = "12";
  }
  twelveHourBtn.innerHTML = hours + " hour clock";
  let m = today.getMinutes();
  let s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  getTime.innerHTML = h + ":" + m + ":" + s + amPm;
  t = setTimeout(function() {
    startTime();
  }, 500);
}

startTime();

switchBtn.addEventListener("click", function(e) {
  isTwelveHour = !isTwelveHour;
});

// ============= Get the day of the week =============================
switch (new Date().getDay()) {
  case 0:
    document.querySelector(".sunday").classList.add("glow");
    break;
  case 1:
    document.querySelector(".monday").classList.add("glow");
    break;
  case 2:
    document.querySelector(".tuesday").classList.add("glow");
    break;
  case 3:
    document.querySelector(".wednesday").classList.add("glow");
    break;
  case 4:
    document.querySelector(".thursday").classList.add("glow");
    break;
  case 5:
    document.querySelector(".friday").classList.add("glow");
    break;
  case 6:
    document.querySelector(".saturday").classList.add("glow");
}

// ============= Get the date =============================
let month = document.querySelector(".month");
let day = document.querySelector(".day");
let year = document.querySelector(".year");
let date = new Date();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
month.innerHTML = months[date.getMonth()];
day.innerHTML = date.getDate();
year.innerHTML = date.getFullYear();
