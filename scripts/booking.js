const bookingForm = document.getElementById("booking-form");
const barberDropdown = document.getElementById("barber")
const dateInput = document.getElementById("date");
const timeDropdown = document.getElementById("time");
const frequencyDropdown = document.getElementById("frequency");
const addPersonBtn = document.getElementById("add-person-btn")

function setTimeOptions() {
    const day = new Date(dateInput.value);

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
    option.value = "";
    timeDropdown.innerHTML = "";
    timeDropdown.appendChild(option);
}

function addPerson() {
    const options = barberDropdown.getElementsByTagName("option");
    const barber = localStorage.getItem("barber");
    const date = localStorage.getItem("date");
    const time = localStorage.getItem("time");
    const frequency = localStorage.getItem("frequency");

    for (let i = 0; i < options.length; i++) {
        if (options.item(i).innerText == barber) {
            options.item(i).remove();
            break;
        }
    }

    dateInput.value = date;
    dateInput.innerHTML = "value=\"" + date + "\"";
    dateInput.removeEventListener("click", removeTimeOptions);

    const timeDropdownOption = new Option();
    timeDropdownOption.innerText = time;

    timeDropdown.removeEventListener("click", setTimeOptions);
    timeDropdown.innerHTML = "";
    timeDropdown.appendChild(timeDropdownOption);

    const frequencyDropdownOption = new Option();
    frequencyDropdownOption.innerText = frequency;

    frequencyDropdown.innerHTML = "";
    frequencyDropdown.appendChild(frequencyDropdownOption);
}

function storeFormData(event) {
    var form = new FormData(event.target);
    form.forEach((value, key) => {
        if (localStorage.getItem(key) != null) {
            key += "1";
        }

        localStorage.setItem(key, value);
    })
}

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    storeFormData(event);
    bookingForm.reset();

    if (event.submitter.id == "add-person-btn") {
        localStorage.setItem("2-people", "true");
        addPerson();
    } else {
        window.location.assign("/confirmation.html");
    }
});

dateInput.addEventListener("click", removeTimeOptions);

timeDropdown.addEventListener("click", setTimeOptions);