const seeYouSoonMsg = document.getElementById("see-you-soon-msg");
const confirmationCode = document.getElementById("confirmation-code");
const barber = document.getElementById("barber");
const service = document.getElementById("service");
const date = document.getElementById("date");
const time = document.getElementById("time");
const frequency = document.getElementById("frequency");

const confirmationCode1 = document.getElementById("confirmation-code1");
const barber1 = document.getElementById("barber1");
const service1 = document.getElementById("service1");
const date1 = document.getElementById("date1");
const time1 = document.getElementById("time1");
const frequency1 = document.getElementById("frequency1");

function setInfo() {
    if (localStorage.getItem("2-people") != null) {
        seeYouSoonMsg.innerText = "See you soon\n" + localStorage.getItem("first-name") + " & " + localStorage.getItem("first-name1") + "!";

        confirmationCode1.innerText = "Confirmation Code: #" + generateCode();
        barber1.innerText = "Barber: " + localStorage.getItem("barber1");
        service1.innerText = "Service: " + localStorage.getItem("service1");
        date1.innerText = "Date: " + localStorage.getItem("date1");
        time1.innerText = "Time: " + localStorage.getItem("time1");
        frequency1.innerText = "Frequency: " + localStorage.getItem("frequency1");
    } else {
        seeYouSoonMsg.innerText = "See you soon " + localStorage.getItem("first-name") + "!";
    }

    confirmationCode.innerText = "Confirmation Code: #" + generateCode();
    barber.innerText = "Barber: " + localStorage.getItem("barber");
    service.innerText = "Service: " + localStorage.getItem("service");
    date.innerText = "Date: " + localStorage.getItem("date");
    time.innerText = "Time: " + localStorage.getItem("time");
    frequency.innerText = "Frequency: " + localStorage.getItem("frequency");

    localStorage.clear();
}

function generateCode() {
    var code = "";

    for (let i = 0; i < 9; i++) {
        code += Math.round(Math.random() * 9);
    }

    return code;
}