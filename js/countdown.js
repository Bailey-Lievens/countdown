var countdownDay = document.getElementById("day_counter");
var countdownHour = document.getElementById("hour_counter");
var countdownMinute = document.getElementById("minute_counter");
var countdownSecond = document.getElementById("second_counter");

var countdownDayTitle = document.getElementById("day_title");
var countdownHourTitle = document.getElementById("hour_title");
var countdownMinuteTitle = document.getElementById("minute_title");
var countdownSecondTitle = document.getElementById("second_title");

var loadingDiv = document.getElementById("loading");

var countdownDate = new Date("Nov 11, 2021 11:11:11");
var timerLoaded = false;
var pageLoaded = false;

window.onload = function() {
    pageLoaded = true;
}

timer();

var counter = setInterval(function() {
    timer();
}, 1000);

function timer(){
    var now = new Date().getTime();

    var timeLeft = countdownDate - now;

    var days = Math.floor(timeLeft / (1000*60*60*24));
    var hours = Math.floor((timeLeft % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((timeLeft % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((timeLeft % (1000*60))/1000);

    if (seconds == 1) {
        countdownSecondTitle.innerHTML = "second";
    } else {
        countdownSecondTitle.innerHTML = "seconds";
    }

    if (minutes == 1) {
        countdownMinuteTitle.innerHTML = "minute";
    } else {
        countdownMinuteTitle.innerHTML = "minutes";
    }

    if (hours == 1) {
        countdownHourTitle.innerHTML = "hour";
    } else {
        countdownHourTitle.innerHTML = "hours";
    }

    if (days == 1) {
        countdownDayTitle.innerHTML = "day";
    } else {
        countdownDayTitle.innerHTML = "days";
    }

    countdownDay.innerHTML = days;
    countdownHour.innerHTML = hours;
    countdownMinute.innerHTML = minutes;
    countdownSecond.innerHTML = seconds;

    document.title = "🚀 " + days + " days until launch 🚀";

    if (timeLeft <= 0) {
        clearInterval(counter);
        document.location.replace("https://designosource.be/loading.html");
    }

    timerLoaded = true;

    if(pageLoaded === true && timerLoaded === true){
        loadingDiv.style.opacity = 0;
        loadingDiv.addEventListener("transitionend", function() {
            loadingDiv.style.display = "none";
        });
    }
}