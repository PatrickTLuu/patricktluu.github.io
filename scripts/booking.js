const bookingForm = document.getElementById("booking-form");

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