const bookingForm = document.getElementById("booking-form");
const dateDropdown = document.getElementById("date");
const timeDropdown = document.getElementById("time");

function setTimeOptions() {
    const day = new Date(dateDropdown.value);

    if ((day.getDay() + 1) % 7 == 0) { //Sunday
        var option = new Option();
        option.innerText = "CLOSED";
        timeDropdown.appendChild(option);
    }
    else if (day.getDay() + 1 == 6) { // Saturday
        for (let i = 12; i < 16; i++) {
            var option = new Option();
            option.innerText = i + ":00";
            timeDropdown.appendChild(option);
        }
    }
    else {
        for (let i = 10; i < 18; i++) {
            var option = new Option();
            option.innerText = i + ":00";
            timeDropdown.appendChild(option);
        }
    }
}

function removeTimeOptions() {
    const option = new Option();
    option.innerText = "-------------------";
    option.id = "time-header";
    option.value = "";
    timeDropdown.innerHTML = "";
    timeDropdown.appendChild(option);
}

function submitForm(event) {
    var form = new FormData(event.target);
    form.forEach((value, key) => {
        localStorage.setItem(key, value);
    })
    window.location.assign("/confirmation.html");
}

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitForm(event);
});

dateDropdown.addEventListener("click", (event) => {
    removeTimeOptions();
})

timeDropdown.addEventListener("click", (event) => {
    event.preventDefault();
    setTimeOptions();
});