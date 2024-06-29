var ramadanDate = new Date('February 28, 2025 00:00:00').getTime();

setInterval(function() {
    var now = new Date().getTime();
    var distance = ramadanDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(intervalId);
        document.getElementById('countdown').innerHTML = "Ramadan has started!";
    }
}, 1000);
