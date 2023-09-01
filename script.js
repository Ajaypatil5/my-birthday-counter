const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

const newYears = "28 AUG 2024";

const newYearCountDown = () =>{
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const helper = newYearsDate-currentDate;

    const totalSeconds = helper / 1000;
    const days = Math.floor(totalSeconds/3600/24)
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) %60;
    
    dayEl.innerHTML = timeFormatter(days);
    hourEl.innerHTML = timeFormatter(hours);
    minuteEl.innerHTML = timeFormatter(minutes);
    secondEl.innerHTML = timeFormatter(seconds);
}

const timeFormatter = (time) =>{
    return time < 10 ? '0'+time : time;
}
newYearCountDown();

setInterval(newYearCountDown, 1000);
