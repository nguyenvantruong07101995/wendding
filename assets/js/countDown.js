const countdownDate = new Date("2024-11-10T10:00:00").getTime();

const x = setInterval(function (params) {
    const now = new Date().getTime();

    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (distance < 0) {
        clearInterval(x);
        // document.getElementById("countdown").innerHTML = "HẾT THỜI GIAN";
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }

}, 1000);



//feedback
const confirmYes = document.getElementById('confirm-yes');
const confirmNo = document.getElementById('confirm-no');
confirmYes.addEventListener('click', function (e) {
    if (this.classList.contains('border')) {
        return
    } else {
        confirmNo.classList.toggle('border');
        this.classList.toggle('border');
        const selectQuantity = document.getElementById('select-quantity');
        selectQuantity.style.display = 'block';
    }
})
confirmNo.addEventListener('click', function (e) {
    if (this.classList.contains('border')) {
        return
    } else {
        confirmYes.classList.toggle('border');
        this.classList.toggle('border');
        const selectQuantity = document.getElementById('select-quantity');
        selectQuantity.style.display = 'none';
    }
})


const nhaTrai = document.getElementById('nha-trai');
const nhaGai = document.getElementById('nha-gai');
nhaTrai.addEventListener('click', function (e) {
    if (this.classList.contains('border')) {
        return
    } else {
        nhaGai.classList.toggle('border');
        this.classList.toggle('border');
    }
})
nhaGai.addEventListener('click', function (e) {
    if (this.classList.contains('border')) {
        return
    } else {
        nhaTrai.classList.toggle('border');
        this.classList.toggle('border');
    }
})


nhaGai.addEventListener('change123123', function (e) {
    if (this.classList.contains('border')) {
        return
    } else {
        nhaTrai.classList.toggle('border');
        this.classList.toggle('border');
    }
})

