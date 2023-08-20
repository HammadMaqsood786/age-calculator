
var main = document.getElementById('main');
main.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        calculateAge();
    }
});

function calculateAge() {

    const birthDay = document.getElementById("day").value;
    const birthMonth = document.getElementById('month').value;
    const birthYear = document.getElementById('year').value;
    const date = new Date();
    let currDay = date.getDate();
    let currMonth = 1 + date.getMonth();
    let currYear = date.getFullYear();
    const theMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    if (birthDay == "" || birthMonth == "" || birthYear == "" ||  birthMonth > 12 || birthYear > 2023 || birthDay > 31) {

        const errorLine = document.getElementsByClassName("for-error-line");
        const inputErrorBorder = document.getElementsByClassName("input-field");
        const inputErrorHeading = document.getElementsByClassName("input-div-heading");

        for (var i = 0; i < errorLine.length; i++) {
            errorLine[i].setAttribute("style", "display: block;");
            inputErrorBorder[i].setAttribute("style", "border-color: #ff5757;");
            inputErrorHeading[i].setAttribute("style", "color: #ff5757;")

        }
        return;
    }

    if (birthMonth == 2 && birthDay > 28 || birthMonth == 4 && birthDay > 30 || birthMonth == 6 && birthDay >      30 || birthMonth == 9 && birthDay > 30 || birthMonth == 11 && birthDay > 30) {

        const errorElem = document.getElementsByClassName("for-error-line");

        for (var i = 0; i < errorElem.length; i++) {
            errorElem[i].setAttribute("style", "display: block;");

        }
        return;
    }

    if (birthDay > currDay) {
        currDay = currDay + theMonth[currMonth - 1];
        currMonth = currMonth - 1;
    }

    if (birthMonth > currMonth) {
        currMonth = currMonth + 12;
        currYear = currYear - 1;
    }

    var calculatedDay = currDay - birthDay;
    var calculatedMonth = currMonth - birthMonth;
    var calculatedYear = currYear - birthYear;

    const ansDay = document.getElementById("ans-day");
    const ansMonth = document.getElementById("ans-month");
    const ansYear = document.getElementById("ans-year");

    ansDay.innerHTML = calculatedDay;
    ansMonth.innerHTML = calculatedMonth;
    ansYear.innerHTML = calculatedYear;

}
