const day = document.getElementById('day').value;
const month = document.getElementById('month').value;
const year = document.getElementById('year').value;

const date = new Date();
const currDay = date.getDate();
const currMonth = 1  +date.getMonth();
const currYear = date.getFullYear();
const theMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
