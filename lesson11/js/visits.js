const count = document.querySelector("#count");
var numDays = 0;
var PreviousVisit;
var currentDate = new Date()

const addToLocalStorage = () => {
    localStorage.setItem('PreviousVisit', currentDate.getTime());
    localStorage.setItem('currentDate', currentDate.getTime());
}

const updateDate = () => {
  localStorage.setItem('currentDate',currentDate.getTime());
  numDays = calculateDays();

}

const calculateDays = () => {
  let previousDay = localStorage.getItem('PreviousVisit');
  let today = localStorage.getItem('currentDate');
  let difference = today - previousDay;

  numDays = difference / (1000 * 3600 * 24);
  numDays = Math.round(numDays);
  return numDays
}


if(localStorage.getItem('PreviousVisit') == null) {
    addToLocalStorage();
    numDays = calculateDays();
} else {
    updateDate();
}

count.textContent = numDays;

localStorage.setItem('PreviousVisit', currentDate.getTime());