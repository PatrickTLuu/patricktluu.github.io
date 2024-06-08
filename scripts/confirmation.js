const seeYouSoonMsg = document.getElementById("see-you-soon-msg");
const confirmationCode = document.getElementById("confirmation-code");
const barber = document.getElementById("barber");
const service = document.getElementById("service");
const date = document.getElementById("date");
const time = document.getElementById("time");

function setInfo() {
    console.log(localStorage.key(0));
    seeYouSoonMsg.innerText = "See you soon " + localStorage.getItem("first-name") + "!";
    confirmationCode.innerText = "Confirmation Code: #" + generateCode();
    barber.innerText = "Barber: " + localStorage.getItem("barber");
    service.innerText = "Service: " + localStorage.getItem("service");
    date.innerText = "Date: " + localStorage.getItem("date");
    time.innerText = "Time: " + localStorage.getItem("time");
}

function generateCode() {
    var code = "";

    for (let i = 0; i < 9; i++) {
        code += Math.round(Math.random() * 9);
    }

    return code;
}