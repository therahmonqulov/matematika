let time = 119;
const timer = document.getElementById("timer");
function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timer.textContent = minutes + ":" + seconds;
    if (time <= 0) {
        clearInterval(countdown);
        timer.textContent = "00:00";
    }
    time--;
}
updateTimer();
let countdown = setInterval(updateTimer, 1000);
