window.onload = () => {
    document.getElementById('decrease').addEventListener('click', decreaseNumber)
    document.getElementById('reset').addEventListener('click', resetNumber)
    document.getElementById('increase').addEventListener('click', increaseNumber)
}

var number = 0;

function increaseNumber() {
    number += 1;
    validateNumber()
    document.querySelector('.number').textContent = number;
}

function decreaseNumber() {
    number -= 1;
    validateNumber()
    document.querySelector('.number').textContent = number;
}

function resetNumber() {
    number = 0
    validateNumber()
    document.querySelector('.number').textContent = number;
}

function validateNumber() {
    if (number === 0) {
        document.querySelector('.number').classList.remove('negative', 'positive');
    } else if (number > 0) {
        document.querySelector('.number').classList.add('positive');
    } else {
        document.querySelector('.number').classList.add('negative');
    }
}