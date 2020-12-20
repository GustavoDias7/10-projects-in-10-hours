const newYear = `1 Jan ${ new Date().getFullYear()+1 }`;

function countDown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
    const days = Math.floor((totalSeconds / 3600 / 24));

    document.getElementById('seconds').innerText = seconds;
    document.getElementById('mins').innerText = minutes;
    document.getElementById('hours').innerText = hours;
    document.getElementById('days').innerText = days;
}

setInterval(countDown, 1000);