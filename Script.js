var pass = document.getElementById('password');
var msg = document.getElementById('message');
var str = document.getElementById('strenght');
let popup = document.getElementById('popup');


pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
    if (pass.value.length < 4) {
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }
    else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if (pass.value.length >= 8) {
        str.innerHTML = "strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
});

function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyJOQVOSifUdNwm7r8dTTbVwvGRb8M7thFdq1w-LmjPScrOQC8XAEwnPSvLtJqIGzN-ZA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})