function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-number').value;
    const successMassage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if (pin == typedNumber) {

        successMassage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        successMassage.style.display = 'none';
        failError.style.display = 'block';
        // console.log('oops');
    }
}
