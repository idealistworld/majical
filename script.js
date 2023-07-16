var link = document.getElementById("events-link");
document.onload = link.setAttribute("href", "https://www.fireside.bio/pastevents");

function changestuff() {
    document.getElementById("title-text").innerHTML = "Application <span id = 'fancy-story' style = 'display: block'>Submitted!</span>";
    document.getElementById("title-text").style.marginTop = "30vh";
    document.querySelector(".mobile-buttons").innerHTML = "";
}


function getDateTime() {

    var date = new Date();

    var hour = date.getUTCHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getUTCMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getUTCSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "-" + month + "-" + day + "T" + hour + ":" + min + ":" + sec + "Z";

}

var utcTime = new Date(getDateTime());
var usaTime = utcTime.toLocaleString("en-US", { timeZone: "America/New_York" });
usaTime += " EST"

function submitted() {
    document.getElementById("title-text").innerHTML = "Waiting...";
    document.getElementById("time-input").setAttribute('value', usaTime)

    setTimeout(changestuff, 2000);
}

